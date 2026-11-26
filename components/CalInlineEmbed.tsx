'use client';

import { useEffect, useRef } from 'react';

/**
 * Inline cal.com scheduler.
 *
 * The layout already boots cal's embed script for the free `discovery` namespace.
 * The paid audit is a different event type, so it needs its own namespace; sharing
 * one would make both buttons open the same calendar, which is the bug this whole
 * change exists to fix.
 */
type CalFn = ((...args: unknown[]) => void) & {
  ns?: Record<string, (...args: unknown[]) => void>;
};

declare global {
  interface Window {
    Cal?: CalFn;
  }
}

export default function CalInlineEmbed({
  calLink,
  namespace,
  minHeight = 640,
}: {
  /** e.g. "growthstackhq/gtm-audit" */
  calLink: string;
  /** Unique per event type on the page. */
  namespace: string;
  minHeight?: number;
}) {
  const containerId = `cal-inline-${namespace}`;
  const booted = useRef(false);

  useEffect(() => {
    if (booted.current) return;
    booted.current = true;

    // cal.com's documented loader snippet, inlined so this component works on any
    // page without depending on what the root layout happens to have initialised.
    (function (C: Window, A: string, L: string) {
      const p = function (a: CalFn, ar: IArguments) {
        (a as unknown as { q: unknown[] }).q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (this: unknown) {
          // eslint-disable-next-line prefer-rest-params
          const ar = arguments;
          const cal = C.Cal as CalFn & { loaded?: boolean; q?: unknown[]; ns?: Record<string, CalFn> };
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const script = d.createElement('script');
            script.src = A;
            d.head.appendChild(script);
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function (this: unknown) {
              // eslint-disable-next-line prefer-rest-params
              p(api as unknown as CalFn, arguments);
            } as unknown as CalFn & { q: unknown[] };
            const ns = ar[1] as string;
            api.q = api.q || [];
            if (typeof ns === 'string') {
              cal.ns![ns] = cal.ns![ns] || (api as CalFn);
              p(cal.ns![ns] as CalFn, ar);
              p(cal as CalFn, ['initNamespace', ns] as unknown as IArguments);
            } else {
              p(cal as CalFn, ar);
            }
            return;
          }
          p(cal as CalFn, ar);
        };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    const Cal = window.Cal;
    if (!Cal) return;

    Cal('init', namespace, { origin: 'https://app.cal.com' });
    Cal.ns?.[namespace]?.('inline', {
      elementOrSelector: `#${containerId}`,
      config: { layout: 'month_view' },
      calLink,
    });
    Cal.ns?.[namespace]?.('ui', {
      cssVarsPerTheme: {
        light: { 'cal-brand': '#F15A24' },
        dark: { 'cal-brand': '#F15A24' },
      },
      hideEventTypeDetails: false,
      layout: 'month_view',
    });
  }, [calLink, namespace, containerId]);

  return (
    <div>
      <div
        id={containerId}
        style={{ width: '100%', minHeight: `${minHeight}px`, overflow: 'scroll' }}
      />
      {/* If the embed is blocked (extensions, strict privacy settings), the buyer
          still needs a way through. They have already paid at this point. */}
      <noscript>
        <a href={`https://cal.com/${calLink}`} style={{ color: '#F15A24' }}>
          Open the booking page directly
        </a>
      </noscript>
      <p style={{ fontSize: '0.85rem', color: '#8A8A8A', marginTop: '14px' }}>
        Calendar not loading?{' '}
        <a
          href={`https://cal.com/${calLink}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#F15A24' }}
        >
          Open it in a new tab
        </a>{' '}
        or email hello@growthstackhq.com and we will send times.
      </p>
    </div>
  );
}
