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
