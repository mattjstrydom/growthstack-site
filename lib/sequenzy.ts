import 'server-only';

/**
 * Sequenzy client.
 *
 * Docs: https://docs.sequenzy.com/api-reference/introduction
 * Base URL: https://api.sequenzy.com/api/v1
 * Auth: Authorization: Bearer <SEQUENZY_API_KEY>
 * Rate limits: 100 req/min per key, 20 req/sec burst.
 *
 * Two rules this module follows, both learned the hard way by anyone who has put a
 * third-party call inside a payment webhook:
 *
 * 1. It never throws into the caller's happy path. `upsertSubscriber` returns a
 *    result object. A Sequenzy outage must not cause us to return a 500 to Stripe,
 *    because Stripe would then retry the webhook and we would double-process a
 *    payment that already succeeded. The money is the source of truth; the CRM
 *    write is best-effort and gets logged loudly when it fails.
 *
 * 2. Writes are upserts keyed on email with duplicateStrategy 'merge', so a Stripe
 *    retry that re-delivers the same event cannot clobber data or create a second
 *    subscriber.
 */

const DEFAULT_BASE_URL = 'https://api.sequenzy.com/api/v1';

export interface UpsertSubscriberInput {
  email: string;
  firstName?: string;
  lastName?: string;
  /** Tag names. Created on demand by Sequenzy if they do not exist. */
  tags?: string[];
  /** Arbitrary key/value pairs stored on the subscriber. */
  customAttributes?: Record<string, string | number | boolean | null>;
  /**
   * 'merge' only fills blanks and never overwrites what is already there, which is
   * the right default for a form or a payment: we should not let a checkout that
   * captured less information overwrite a richer existing record.
   */
  duplicateStrategy?: 'skip' | 'merge' | 'overwrite';
  /** Set false for transactional writes that should not start a marketing sequence. */
  enrollInSequences?: boolean;
}

export type SequenzyResult =
  | { ok: true; subscriberId?: string; created?: boolean; skipped?: boolean }
  | { ok: false; error: string; status?: number; retryable: boolean };

function isConfigured(): boolean {
  return Boolean(process.env.SEQUENZY_API_KEY);
}

export async function upsertSubscriber(
  input: UpsertSubscriberInput
): Promise<SequenzyResult> {
  const apiKey = process.env.SEQUENZY_API_KEY;
  if (!apiKey) {
    // Not an error worth failing a request over: the site should keep taking money
    // and submitting forms before the CRM is wired up.
    console.warn('[sequenzy] SEQUENZY_API_KEY not set, skipping subscriber upsert');
    return { ok: false, error: 'not_configured', retryable: false };
  }

  const baseUrl = (process.env.SEQUENZY_BASE_URL ?? DEFAULT_BASE_URL).replace(/\/$/, '');

  const body = {
    email: input.email,
    firstName: input.firstName,
    lastName: input.lastName,
    tags: input.tags,
    customAttributes: input.customAttributes,
    duplicateStrategy: input.duplicateStrategy ?? 'merge',
    enrollInSequences: input.enrollInSequences ?? true,
  };

  try {
    // 10s ceiling: a hanging CRM call must not hold a serverless function open
    // until the platform kills it mid-write.
    const response = await fetch(`${baseUrl}/subscribers`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(10_000),
      cache: 'no-store',
    });

    const text = await response.text();
    let parsed: unknown = null;
    try {
      parsed = text ? JSON.parse(text) : null;
    } catch {
      // Non-JSON body; keep the raw text for the log line below.
    }

    if (!response.ok) {
      const message =
        (parsed as { error?: { message?: string } | string } | null)?.error &&
        typeof (parsed as { error: { message?: string } | string }).error === 'object'
          ? ((parsed as { error: { message?: string } }).error.message ?? 'unknown error')
          : typeof (parsed as { error?: string } | null)?.error === 'string'
            ? ((parsed as { error: string }).error)
            : text.slice(0, 300);

      console.error(
        `[sequenzy] upsert failed status=${response.status} email=${redact(input.email)} error=${message}`
      );

      return {
        ok: false,
        error: message,
        status: response.status,
        // 429 and 5xx are worth retrying; 4xx generally means our payload is wrong.
        retryable: response.status === 429 || response.status >= 500,
      };
    }

    const subscriber = (parsed as { subscriber?: { id?: string; created?: boolean; skipped?: boolean } } | null)
      ?.subscriber;

    return {
      ok: true,
      subscriberId: subscriber?.id,
      created: subscriber?.created,
      skipped: subscriber?.skipped,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[sequenzy] upsert threw email=${redact(input.email)} error=${message}`);
    return { ok: false, error: message, retryable: true };
  }
}

/** Keeps full addresses out of logs while leaving them recognisable for debugging. */
function redact(email: string): string {
  const [local, domain] = email.split('@');
  if (!domain) return '***';
  return `${local.slice(0, 2)}***@${domain}`;
}

export const sequenzyConfigured = isConfigured;
