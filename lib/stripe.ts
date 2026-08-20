import 'server-only';

import Stripe from 'stripe';

/**
 * Lazily constructed so a missing STRIPE_SECRET_KEY fails at request time with a
 * clear message, rather than at module load, which would break `next build` on any
 * environment that has not been given the key yet (previews, CI, a fresh clone).
 */
let client: Stripe | null = null;

export function getStripe(): Stripe {
  if (client) return client;

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error(
      'STRIPE_SECRET_KEY is not set. Add it in Vercel project settings and in .env.local for development.'
    );
  }

  // No apiVersion pinned: the SDK defaults to the version it was built against,
  // which is what its TypeScript types describe. Pinning a different string here
  // is the usual way these integrations start lying about their own types.
  client = new Stripe(key);
  return client;
}

/**
 * Validates a statement descriptor suffix against Stripe's rules before we send it.
 *
 * Stripe rejects the whole Checkout Session if the suffix is invalid, which would
 * take checkout down rather than degrade it. So this returns `undefined` and warns
 * on anything questionable: a missing suffix costs us a nicer card statement, a
 * rejected session costs us the sale.
 *
 * Stripe's rules for the complete descriptor (prefix + "* " + suffix):
 *   - 5 to 22 characters total
 *   - Latin characters only
 *   - at least one letter in each of prefix and suffix
 *   - none of  <  >  \  '  "  *
 *
 * The prefix lives in the Stripe dashboard, not here, so we cannot measure the
 * concatenated length at runtime. Capping the suffix at 10 makes that unnecessary:
 * the prefix maxes out at 10 and the separator is 2, so 10 + 2 + 10 hits the 22
 * limit exactly. Any suffix within 10 is safe against every legal prefix.
 */
export const DESCRIPTOR_SUFFIX_MAX = 10;

export function sanitizeStatementDescriptorSuffix(
  suffix: string | undefined
): string | undefined {
  if (!suffix) return undefined;

  const trimmed = suffix.trim();

  if (trimmed.length === 0) return undefined;

  if (trimmed.length > DESCRIPTOR_SUFFIX_MAX) {
    console.warn(
      `[stripe] statement descriptor suffix "${trimmed}" is ${trimmed.length} chars; ` +
        `max ${DESCRIPTOR_SUFFIX_MAX} to stay inside Stripe's 22-char total with any prefix. Omitting it.`
    );
    return undefined;
  }

  // Latin letters, digits, space, and the punctuation Stripe tolerates.
  if (!/^[A-Za-z0-9 .,\-_&+/()#:;]+$/.test(trimmed)) {
    console.warn(
      `[stripe] statement descriptor suffix "${trimmed}" contains characters Stripe may reject. Omitting it.`
    );
    return undefined;
  }

  if (!/[A-Za-z]/.test(trimmed)) {
    console.warn(
      `[stripe] statement descriptor suffix "${trimmed}" has no letter, which Stripe requires. Omitting it.`
    );
    return undefined;
  }

  return trimmed;
}

/** Reads an env var that must be present, with an error that says what to do. */
export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not set. See docs/STRIPE-CHECKOUT.md for setup.`);
  }
  return value;
}

/**
 * Resolves the public origin for success and cancel URLs.
 *
 * Vercel sets VERCEL_PROJECT_PRODUCTION_URL on every deployment, so production
 * links stay correct without configuration, but an explicit NEXT_PUBLIC_SITE_URL
 * always wins so custom domains and local development behave predictably.
 */
export function siteOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, '');

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return 'http://localhost:3000';
}
