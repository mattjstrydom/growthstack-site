// End-to-end test of the webhook handler + Sequenzy client, with no real
// Stripe/Sequenzy credentials: we sign a payload with a known webhook secret
// (which is all constructEventAsync checks) and point the Sequenzy client at a
// local mock so we can assert the exact outbound request.
import crypto from 'node:crypto';
import http from 'node:http';

const WHSEC = 'whsec_test_local_only_not_a_real_secret';
const PORT = 3126;
const MOCK_PORT = 3123;

let captured = [];
let mockMode = 'ok';

const mock = http.createServer((req, res) => {
  let body = '';
  req.on('data', (c) => (body += c));
  req.on('end', () => {
    captured.push({
      method: req.method,
      url: req.url,
      auth: req.headers.authorization,
      contentType: req.headers['content-type'],
      body: JSON.parse(body || '{}'),
    });
    if (mockMode === 'ok') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, subscriber: { id: 'sub_123', email: JSON.parse(body).email, created: true } }));
    } else if (mockMode === '500') {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: { code: 'internal', message: 'boom' } }));
    } else if (mockMode === '429') {
      res.writeHead(429, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: { code: 'rate_limited', message: 'slow down' } }));
    } else {
      // hang, to exercise the AbortSignal timeout
    }
  });
});
await new Promise((r) => mock.listen(MOCK_PORT, r));

function sign(payload, secret) {
  const ts = Math.floor(Date.now() / 1000);
  const sig = crypto.createHmac('sha256', secret.replace(/^whsec_/, '') ? secret : secret)
    .update(`${ts}.${payload}`, 'utf8').digest('hex');
  return `t=${ts},v1=${sig}`;
}

function event(overrides = {}) {
  return JSON.stringify({
    id: 'evt_test_1', object: 'event', type: 'checkout.session.completed',
    api_version: '2025-01-01', created: Math.floor(Date.now() / 1000), livemode: false,
    data: { object: {
      id: 'cs_test_abc', object: 'checkout.session', mode: 'payment',
      status: 'complete', payment_status: 'paid',
      amount_total: 120000, currency: 'usd', created: Math.floor(Date.now() / 1000),
      customer: 'cus_test_1',
      customer_details: { email: 'buyer@acme.io', name: 'Dana Reyes' },
      custom_fields: [
        { key: 'company', type: 'text', label: { type: 'custom', custom: 'Company name' }, text: { value: 'Acme Logistics' } },
        { key: 'website', type: 'text', label: { type: 'custom', custom: 'Company website' }, text: { value: 'acme.io' } },
        { key: 'crm_state', type: 'dropdown', label: { type: 'custom', custom: 'Current CRM' }, dropdown: { value: 'hubspot_starter' } },
      ],
      metadata: { product: 'gtm_audit' },
      ...overrides,
    } },
  });
}

async function post(payload, sig) {
  const res = await fetch(`http://localhost:${PORT}/api/stripe/webhook`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(sig ? { 'stripe-signature': sig } : {}) },
    body: payload,
  });
  return { status: res.status, body: await res.json().catch(() => null) };
}

const results = [];
function check(name, pass, detail = '') {
  results.push({ name, pass, detail });
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`);
}

// 1. Valid signature, happy path
captured = []; mockMode = 'ok';
let p = event();
let r = await post(p, sign(p, WHSEC));
check('valid signature accepted', r.status === 200, `status=${r.status}`);
check('one Sequenzy call made', captured.length === 1, `calls=${captured.length}`);
if (captured[0]) {
  const c = captured[0];
  check('POST to /subscribers', c.method === 'POST' && c.url === '/subscribers', `${c.method} ${c.url}`);
  check('bearer auth header', c.auth === 'Bearer test_key_local', c.auth);
  check('email mapped', c.body.email === 'buyer@acme.io', c.body.email);
  check('name split correctly', c.body.firstName === 'Dana' && c.body.lastName === 'Reyes', `${c.body.firstName}/${c.body.lastName}`);
  check('tags set', JSON.stringify(c.body.tags) === JSON.stringify(['customer','gtm-audit-purchased']), JSON.stringify(c.body.tags));
  check('duplicateStrategy merge', c.body.duplicateStrategy === 'merge', c.body.duplicateStrategy);
  check('custom_fields flattened', c.body.customAttributes.company === 'Acme Logistics' && c.body.customAttributes.crm_state === 'hubspot_starter', JSON.stringify(c.body.customAttributes));
  check('amount recorded as major units', c.body.customAttributes.audit_amount === '1200.00', c.body.customAttributes.audit_amount);
  check('stripe ids recorded', c.body.customAttributes.stripe_session_id === 'cs_test_abc' && c.body.customAttributes.stripe_customer_id === 'cus_test_1');
}

// 2. Tampered payload must be rejected
p = event();
r = await post(p.replace('120000', '100'), sign(p, WHSEC));
check('tampered body rejected', r.status === 400, `status=${r.status}`);

// 3. Wrong secret rejected
p = event();
r = await post(p, sign(p, 'whsec_wrong_secret'));
check('wrong secret rejected', r.status === 400, `status=${r.status}`);

// 4. Unpaid session must not sync
captured = [];
p = event({ payment_status: 'unpaid' });
r = await post(p, sign(p, WHSEC));
check('unpaid session returns 200', r.status === 200, `status=${r.status}`);
check('unpaid session does NOT sync', captured.length === 0, `calls=${captured.length}`);

// 5. Sequenzy 500 must not fail the webhook (no Stripe retry storm)
captured = []; mockMode = '500';
p = event();
r = await post(p, sign(p, WHSEC));
check('Sequenzy 500 still returns 200 to Stripe', r.status === 200, `status=${r.status}`);

// 6. Sequenzy 429 likewise
mockMode = '429';
p = event();
r = await post(p, sign(p, WHSEC));
check('Sequenzy 429 still returns 200 to Stripe', r.status === 200, `status=${r.status}`);

// 7. Duplicate delivery of the same event is safe (upsert + merge)
captured = []; mockMode = 'ok';
p = event();
const s = sign(p, WHSEC);
await post(p, s); await post(p, s);
check('duplicate delivery uses merge upsert both times',
  captured.length === 2 && captured.every(c => c.body.duplicateStrategy === 'merge'),
  `calls=${captured.length}`);

// 8. Unknown event type is a no-op, not an error
const other = JSON.stringify({ id: 'evt_2', object: 'event', type: 'customer.created', created: 1, livemode: false, data: { object: {} } });
r = await post(other, sign(other, WHSEC));
check('unknown event type returns 200', r.status === 200, `status=${r.status}`);

// 9. Missing email cannot sync
captured = [];
p = event({ customer_details: { name: 'No Email' } });
r = await post(p, sign(p, WHSEC));
check('session without email does not sync', r.status === 200 && captured.length === 0, `status=${r.status} calls=${captured.length}`);

mock.close();
const failed = results.filter(r => !r.pass);
console.log(`\n${results.length - failed.length}/${results.length} passed`);
process.exit(failed.length ? 1 : 0);
