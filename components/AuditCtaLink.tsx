'use client';

import Link from 'next/link';
import type { CSSProperties } from 'react';
import { auditOffer } from '@/lib/audit-offer';

/**
 * The one and only way to send someone to the paid audit.
 *
 * Every audit CTA used to be a BookDiscoveryButton, which opened the *free*
 * cal.com discovery event. So a button reading "$1,200" took the buyer to a free
 * call and collected no money. This links to /audit, where they pay first and book
 * second.
 *
 * Keep using this rather than hand-rolling links, so the label and the destination
 * cannot drift apart again.
 */
export default function AuditCtaLink({
  variant = 'primary',
  label,
  utmContent,
  className = '',
  style,
}: {
  variant?: 'primary' | 'on-dark' | 'quiet';
  label?: string;
  /** Recorded on the dataLayer so the funnel stays measurable. */
  utmContent: string;
  className?: string;
  style?: CSSProperties;
}) {
  const text = label ?? `Book a GTM Audit — ${auditOffer.priceDisplay}`;

  const base: CSSProperties = {
    fontWeight: 500,
    borderRadius: '12px',
    textDecoration: 'none',
    transition: 'background 0.18s ease, border-color 0.18s ease, color 0.18s ease',
  };

  const variants: Record<string, CSSProperties> = {
    primary: {
      ...base,
      background: '#F15A24',
      color: '#ffffff',
      padding: '14px 26px',
      fontSize: '1rem',
      border: '1px solid rgba(255,255,255,0.12)',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.16)',
    },
    'on-dark': {
      ...base,
      background: '#F15A24',
      color: '#ffffff',
      padding: '14px 26px',
      fontSize: '1.0625rem',
      boxShadow: '0 8px 24px rgba(11,21,36,0.24)',
    },
    quiet: {
      ...base,
      background: 'none',
      color: '#F15A24',
      padding: 0,
      fontSize: 'inherit',
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
    },
  };

  function track() {
    if (typeof window === 'undefined') return;
    const w = window as Window & { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer ?? [];
    w.dataLayer.push({
      event: 'audit_cta_click',
      utm_content: utmContent,
      page_path: window.location.pathname,
    });
  }

  return (
    <Link
      href="/audit"
      onClick={track}
      className={`inline-flex items-center justify-center gap-2 ${className}`}
      style={{ ...variants[variant], ...style }}
      onMouseEnter={(e) => {
        if (variant === 'quiet') e.currentTarget.style.color = '#D44E1E';
        else e.currentTarget.style.background = '#D44E1E';
      }}
      onMouseLeave={(e) => {
        if (variant === 'quiet') e.currentTarget.style.color = '#F15A24';
        else e.currentTarget.style.background = '#F15A24';
      }}
    >
      {text}
    </Link>
  );
}
