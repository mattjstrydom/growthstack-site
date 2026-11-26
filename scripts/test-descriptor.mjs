/**
 * Unit tests for the statement descriptor suffix validator.
 *
 * Run: node scripts/test-descriptor.mjs
 * No credentials and no running server needed.
 *
 * Why this exists: an invalid suffix makes Stripe reject the entire Checkout
 * Session, so a bad value here does not degrade the card statement, it stops the
 * site taking money. Cheap to test, expensive to get wrong.
 *
 * Compiles lib/stripe.ts and lib/audit-offer.ts to a temp directory, strips the
 * 'server-only' guard (which only exists to stop the module reaching a client
 * bundle), and asserts against the real implementation.
 */
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync, symlinkSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const repoRoot = resolve(import.meta.dirname, '..');
const outDir = mkdtempSync(join(tmpdir(), 'gs-descriptor-'));

try {
  execFileSync(
    join(repoRoot, 'node_modules', '.bin', 'tsc'),
    [
      join(repoRoot, 'lib', 'stripe.ts'),
      join(repoRoot, 'lib', 'audit-offer.ts'),
      '--outDir', outDir,
      '--module', 'nodenext',
      '--moduleResolution', 'nodenext',
      '--target', 'es2022',
      '--skipLibCheck',
    ],
    { stdio: 'inherit' }
  );

  const compiled = join(outDir, 'stripe.js');
  writeFileSync(
    compiled,
    readFileSync(compiled, 'utf8').replace(/^require\(["']server-only["']\);?$/m, '')
  );
  symlinkSync(join(repoRoot, 'node_modules'), join(outDir, 'node_modules'));

  const { sanitizeStatementDescriptorSuffix, DESCRIPTOR_SUFFIX_MAX } = await import(
    pathToFileURL(compiled).href
  );
  const { auditOffer } = await import(pathToFileURL(join(outDir, 'audit-offer.js')).href);

  const cases = [
    ['GTM AUDIT', 'GTM AUDIT', 'the value we ship'],
    ['  GTM AUDIT  ', 'GTM AUDIT', 'trims surrounding whitespace'],
    ['GTM BUILD', 'GTM BUILD', 'a sibling product suffix'],
    ['AUDIT', 'AUDIT', 'short is fine'],
    ['A', 'A', 'Stripe enforces the 5-char minimum on the total, not the suffix'],
    ['GTM AUDIT 2026', undefined, `over ${DESCRIPTOR_SUFFIX_MAX} chars, risks truncation`],
    ['GTM*AUDIT', undefined, 'asterisk is the separator, Stripe rejects it'],
    ["GTM'AUDIT", undefined, 'single quote disallowed'],
    ['GTM"AUDIT', undefined, 'double quote disallowed'],
    ['GTM<AUDIT', undefined, 'angle bracket disallowed'],
    ['GTM>AUDIT', undefined, 'angle bracket disallowed'],
    ['GTM\\AUDIT', undefined, 'backslash disallowed'],
    ['1200', undefined, 'no letter, Stripe requires at least one'],
    ['-- --', undefined, 'no letter'],
    ['GTM ÄUDIT', undefined, 'non-Latin character'],
    ['', undefined, 'empty'],
    ['   ', undefined, 'whitespace only'],
    [undefined, undefined, 'unset'],
  ];

  let pass = 0;
  let fail = 0;
  const log = [];

  for (const [input, expected, why] of cases) {
    const got = sanitizeStatementDescriptorSuffix(input);
    const ok = got === expected;
    ok ? pass++ : fail++;
    log.push(`${ok ? 'PASS' : 'FAIL'}  ${JSON.stringify(input)} -> ${JSON.stringify(got)}  (${why})`);
  }

  const shipped = auditOffer.statementDescriptorSuffix;
  const survives = sanitizeStatementDescriptorSuffix(shipped) === shipped;
  survives ? pass++ : fail++;
  log.push(`${survives ? 'PASS' : 'FAIL'}  shipped suffix "${shipped}" passes its own validator`);

  // Stripe: prefix <= 10, separator "* " is 2, total <= 22.
  const worstCase = 10 + 2 + shipped.length;
  const fits = worstCase <= 22;
  fits ? pass++ : fail++;
  log.push(
    `${fits ? 'PASS' : 'FAIL'}  worst case with a 10-char prefix = ${worstCase} chars (Stripe max 22)`
  );

  console.log(log.join('\n'));
  console.log(`\n${pass}/${pass + fail} passed`);
  process.exit(fail ? 1 : 0);
} finally {
  rmSync(outDir, { recursive: true, force: true });
}
