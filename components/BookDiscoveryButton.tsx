'use client';

import { CSSProperties, useRef, useState } from 'react';

type CalNamespaceApi = ((...args: unknown[]) => void) & { q?: unknown[] };
type CalApi = ((...args: unknown[]) => void) & {
  loaded?: boolean;
  ns?: Record<string, CalNamespaceApi>;
  q?: unknown[];
};

declare global {
  interface Window {
    Cal?: CalApi;
    __growthstackCalLoader?: Promise<void>;
    dataLayer?: unknown[];
  }
}

interface Props {
  utmContent: string;
  className?: string;
  style?: CSSProperties;
  hoverStyle?: CSSProperties;
  children?: React.ReactNode;
}

function ensureCalLoaded() {
  if (typeof window === 'undefined') return Promise.resolve();

  if (window.__growthstackCalLoader) {
    return window.__growthstackCalLoader;
  }

  window.__growthstackCalLoader = new Promise<void>((resolve, reject) => {
    const onReady = () => {
      window.Cal?.('init', 'discovery', { origin: 'https://app.cal.com' });
      window.Cal?.ns?.discovery?.('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#292929' },
          dark: { 'cal-brand': '#F15A24' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
      resolve();
    };

    if (window.Cal?.loaded) {
      onReady();
      return;
    }

    ((C: Window, A: string, L: string) => {
      const p = (a: { q?: unknown[] }, args: IArguments | unknown[]) => {
        a.q = a.q || [];
        a.q.push(Array.from(args));
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        ((...args: unknown[]) => {
          const cal = C.Cal as CalApi;
          if (!cal.loaded) {
            cal.ns = cal.ns || {};
            cal.q = cal.q || [];
          }
          if (args[0] === L) {
            const namespace = args[1];
            const api: CalNamespaceApi = (...namespaceArgs: unknown[]) => {
              p(api, namespaceArgs);
            };
            api.q = api.q || [];
            if (typeof namespace === 'string') {
              cal.ns![namespace] = cal.ns![namespace] || api;
              p(cal.ns![namespace], args);
              p(cal, ['initNamespace', namespace]);
            } else {
              p(cal, args);
            }
            return;
          }
          p(cal, args);
        });
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    const existing = document.querySelector<HTMLScriptElement>('script[data-growthstack-cal="true"]');
    if (existing) {
      existing.addEventListener('load', onReady, { once: true });
      existing.addEventListener('error', () => reject(new Error('Failed to load Cal.com')), {
        once: true,
      });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.dataset.growthstackCal = 'true';
    script.onload = onReady;
    script.onerror = () => reject(new Error('Failed to load Cal.com'));
    document.head.appendChild(script);
  });

  return window.__growthstackCalLoader;
}

export default function BookDiscoveryButton({
  utmContent,
  className,
  style,
  hoverStyle,
  children,
}: Props) {
  const [hovered, setHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const calLink = `growthstackhq/discovery?utm_source=growthstackhq&utm_medium=website&utm_campaign=discovery_call&utm_content=${utmContent}`;

  const handleClick = async () => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'cal_book_click',
        utm_content: utmContent,
        page_path: window.location.pathname,
      });
    }

    if (!window.Cal?.loaded) {
      await ensureCalLoaded();
      buttonRef.current?.click();
    }
  };

  return (
    <button
      ref={buttonRef}
      data-cal-link={calLink}
      data-cal-namespace="discovery"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      onClick={() => {
        void handleClick();
      }}
      onMouseEnter={() => {
        setHovered(true);
        void ensureCalLoaded();
      }}
      onFocus={() => {
        void ensureCalLoaded();
      }}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={{
        transition: 'background 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
        ...style,
        ...(hovered && hoverStyle ? hoverStyle : {}),
      }}
    >
      {children ?? 'Book a Discovery Call'}
    </button>
  );
}
