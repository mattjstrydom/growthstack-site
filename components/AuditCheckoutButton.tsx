'use client';

import { useState } from 'react';
import { primaryButtonStyle } from './MarketingPrimitives';

/**
 * Posts to /api/checkout and redirects to the Stripe-hosted payment page.
 *
 * Deliberately dumb: it sends no price, product or amount. The server decides what
 * is being sold, so nothing here can be tampered with from the browser console.
 */
export default function AuditCheckoutButton({
  label = 'Pay and book the audit',
  utmContent = 'audit_page',
}: {
  label?: string;
  utmContent?: string;
}) {
  const [state, setState] = useState<'idle' | 'loading' | 'error'>('idle');
  const [message, setMessage] = useState<string | null>(null);

  async function start() {
    if (state === 'loading') return;
    setState('loading');
    setMessage(null);

    if (typeof window !== 'undefined') {
      const w = window as Window & { dataLayer?: unknown[] };
      w.dataLayer = w.dataLayer ?? [];
      w.dataLayer.push({
        event: 'audit_checkout_start',
        utm_content: utmContent,
        page_path: window.location.pathname,
      });
    }

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });

      const data = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !data.url) {
        setState('error');
        setMessage(data.error ?? 'Could not start checkout. Please try again.');
        return;
      }

      window.location.assign(data.url);
    } catch {
      setState('error');
      setMessage(
        'Could not reach the payment page. Check your connection, or email hello@growthstackhq.com.'
      );
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={start}
        disabled={state === 'loading'}
        className="inline-flex items-center justify-center gap-2 cursor-pointer"
        style={{
          ...primaryButtonStyle,
          opacity: state === 'loading' ? 0.72 : 1,
          cursor: state === 'loading' ? 'progress' : 'pointer',
        }}
      >
        {state === 'loading' ? 'Opening secure checkout…' : label}
        {state !== 'loading' && (
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden>
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <p style={{ fontSize: '0.85rem', color: '#8A8A8A', marginTop: '12px' }}>
        Card payment handled by Stripe. We never see your card details.
      </p>

      {message && (
        <p role="alert" style={{ fontSize: '0.9rem', color: '#B4341A', marginTop: '10px' }}>
          {message}
        </p>
      )}
    </div>
  );
}
