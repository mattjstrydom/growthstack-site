# GTM Audit checkout: setup and operations

Everything the site needs to take $1,200 for the GTM Audit and create the buyer in
Sequenzy. The code is done; this is the part only you can do, because it involves
your Stripe and Sequenzy accounts.

**Do not paste secret keys into chat, a ticket, or this file.** They go in
`.env.local` locally and in Vercel's environment variables in the cloud, nowhere
else.

---

## What was built

| Path | What it does |
|---|---|
| `app/audit/page.tsx` | The paid audit page. Price, deliverables, checkout button. |
| `app/audit/confirmed/page.tsx` | Post-payment page. Verifies the payment server-side, then embeds the cal.com scheduler so the working session gets booked. |
| `app/api/checkout/route.ts` | Creates the Stripe Checkout Session. Reads the price server-side; the browser cannot influence what is charged. |
| `app/api/stripe/webhook/route.ts` | Verifies Stripe's signature and, on a paid session, upserts the buyer into Sequenzy. |
| `lib/stripe.ts` | Lazy Stripe client, env helpers, origin resolution. |
| `lib/sequenzy.ts` | Sequenzy client. Never throws into a request path. |
| `lib/audit-offer.ts` | Single source of truth for the offer: name, price, deliverables, terms. |
| `components/AuditCheckoutButton.tsx` | Posts to `/api/checkout`, redirects to Stripe. |
| `components/AuditCtaLink.tsx` | The only approved way to link to the paid audit. |
| `components/CalInlineEmbed.tsx` | Inline cal.com scheduler with its own namespace. |
| `scripts/test-webhook.mjs` | 20 assertions over the webhook. Run it after any change. |

The flow: `/audit` → Stripe hosted checkout → `/audit/confirmed` → books the
session. Stripe fires the webhook in parallel, which writes to Sequenzy.

---

## Step 1 — Create the product in Stripe

1. Stripe dashboard → **Product catalogue** → **Add product**.
2. Name: `GTM Audit`. Description is worth filling in: it shows on the checkout
   page and the invoice.
3. Pricing: **One-off**, `1200.00`, `USD`.
4. Save, then open the price you just created and copy its **API ID**.
   It starts `price_`. If you copied something starting `prod_`, that is the
   product id, not the price id, and checkout will reject it.

## Step 2 — Get your keys

Stripe dashboard → **Developers → API keys**. Work in **test mode** first: the
toggle is at the top of the dashboard, and test keys start `sk_test_`.

## Step 3 — Local environment

```bash
cp .env.example .env.local
```

Fill in `STRIPE_SECRET_KEY` and `STRIPE_AUDIT_PRICE_ID`. Leave
`STRIPE_WEBHOOK_SECRET` for the next step.

## Step 4 — Webhook, locally

Install the Stripe CLI, then:

```bash
stripe login
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

It prints a `whsec_…`. Put that in `.env.local` as `STRIPE_WEBHOOK_SECRET`.
Keep `stripe listen` running in its own terminal while you test.

## Step 5 — Create the cal.com event type

The audit working session must be a **separate event type** from the free
discovery call. This is the whole point of the change: before this, a button
reading "$1,200" opened the free-call calendar.

In cal.com create an event type for the 60-minute audit working session, then set
`NEXT_PUBLIC_CAL_AUDIT_EVENT` to its slug path, e.g. `growthstackhq/gtm-audit`.
Consider marking it "private" so it is only reachable from the confirmation page.

## Step 6 — Sequenzy

Sequenzy dashboard → **Settings → API Keys**. Put the key in `SEQUENZY_API_KEY`.

The webhook writes a subscriber with:

- tags `customer` and `gtm-audit-purchased`
- custom attributes: `company`, `website`, `crm_state`, `audit_purchased_at`,
  `audit_amount`, `audit_currency`, `stripe_customer_id`, `stripe_session_id`,
  `source`

Create a sequence triggered off the `gtm-audit-purchased` tag if you want the
access-request email to send itself.

Writes use `duplicateStrategy: merge`, so a duplicate webhook delivery or a later
form fill can never overwrite existing data. If `SEQUENZY_API_KEY` is unset the
site still takes payments and just logs a warning.

## Step 7 — Test the whole path

```bash
npm run dev
```

Go to `/audit`, click through, and pay with `4242 4242 4242 4242`, any future
expiry, any CVC. Other useful cards:

| Scenario | Card |
|---|---|
| Succeeds | `4242 4242 4242 4242` |
| Requires 3DS | `4000 0025 0000 3155` |
| Declined | `4000 0000 0000 9995` |

Check, in order:

1. Checkout asks for company, website and current CRM.
2. You land on `/audit/confirmed` with the amount and the calendar.
3. `stripe listen` shows `checkout.session.completed` returning 200.
4. The subscriber exists in Sequenzy with the right tags and attributes.
5. Cancelling on the Stripe page returns you to `/audit` with the "not charged"
   notice.

Also run the offline regression suite, which needs no credentials:

```bash
node scripts/test-webhook.mjs   # requires the app running on the port in the file
```

## Step 8 — Production

1. In Vercel, add every variable from `.env.example` to **Production** (and
   **Preview**, using test keys, if you want previews to work).
2. Swap to live keys (`sk_live_…`) and the **live-mode** price id. Live and test
   mode have separate products; creating one does not create the other.
3. Stripe dashboard → **Developers → Webhooks** → **Add endpoint**:
   - URL: `https://www.growthstackhq.com/api/stripe/webhook`
   - Events: `checkout.session.completed`,
     `checkout.session.async_payment_succeeded`,
     `checkout.session.async_payment_failed`,
     `charge.refunded`
   - Copy the endpoint's signing secret into `STRIPE_WEBHOOK_SECRET` in Vercel.
     This is a **different** value from the CLI one.
4. Set `NEXT_PUBLIC_SITE_URL=https://www.growthstackhq.com`.
5. Do one real live-mode purchase yourself and refund it. It is the only way to
   know the live path works.

---

## Decisions to make, that code should not make for you

**Sales tax is off.** `STRIPE_AUTOMATIC_TAX=false`. Whether a US business must
collect sales tax on a consulting engagement depends on economic nexus per state
and on whether that state treats the service as taxable. I am not qualified to
advise on it. Get it answered, activate Stripe Tax in the dashboard, then set the
variable to `true` — no code change needed.

**Refund policy.** Stripe dashboard → **Settings → Checkout** lets you publish a
refund policy on the payment page, and it measurably reduces abandonment. You do
not have one written yet. Related: the scope-completion guarantee still needs the
scope document behind it before it goes on the site.

**Terms of service.** The checkout can require a terms checkbox
(`consent_collection.terms_of_service`). It is not enabled, because you should
decide whether the audit needs its own terms first. The site's
`/terms-and-conditions` is a website policy, not an engagement agreement.

---

## Operating it

**A payment succeeded but nothing reached Sequenzy.** Stripe dashboard →
Developers → Webhooks → your endpoint → find the event → **Resend**. The handler
is idempotent, so resending is safe. Look for
`[stripe-webhook] SEQUENZY SYNC FAILED` in the Vercel logs for the reason.

**Someone paid and never booked.** The webhook has their email, company and
website in Sequenzy. Email them the calendar link. Consider a sequence off the
`gtm-audit-purchased` tag that nudges anyone who has not booked within 24 hours.

**Changing the price.** Create a new price in Stripe (never edit a live one, it
breaks reporting), update `STRIPE_AUDIT_PRICE_ID`, then update
`priceDisplay` and `expectedAmountMinor` in `lib/audit-offer.ts`. If you forget
the second half, `/api/checkout` logs a `price drift` warning on every checkout
and the customer is charged the Stripe amount, not the advertised one. That guard
exists because this exact mismatch has already happened on this site once.

**A refund.** Refund in Stripe. The webhook logs it but does not undo anything
downstream: remove the `gtm-audit-purchased` tag in Sequenzy by hand.

---

## What is deliberately not built

- **No durable idempotency store.** Stripe can deliver the same event twice. Every
  current side effect is an upsert, so duplicates are harmless. The moment you add
  something that is not idempotent — sending an email, creating an invoice by hand,
  charging anything — you need to record processed event ids somewhere persistent
  first.
- **No customer portal.** One-off payment, nothing to self-manage.
- **No email from our side.** Stripe sends the receipt and invoice; cal.com sends
  the booking confirmation. If you want a branded welcome, send it from Sequenzy
  off the `gtm-audit-purchased` tag rather than adding another sender.
