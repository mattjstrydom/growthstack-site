'use client';

import { CSSProperties, useState } from 'react';

interface Props {
  utmContent: string;
  className?: string;
  style?: CSSProperties;
  hoverStyle?: CSSProperties;
  children?: React.ReactNode;
}

export default function BookDiscoveryButton({ utmContent, className, style, hoverStyle, children }: Props) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    // Push GTM event
    if (typeof window !== 'undefined') {
      const w = window as Window & { dataLayer?: unknown[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: 'cal_book_click',
        utm_content: utmContent,
        page_path: window.location.pathname,
      });
    }
    // Cal.com opens the modal via data-cal-link — no JS call needed
  };

  // TODO(matt): every button on the site points at the same free `discovery` event
  // type, including the ones now labelled "Book a GTM Audit — $1,200". Create a
  // separate paid cal.com event type for the audit and route the audit CTAs to it,
  // otherwise a buyer clicking a $1,200 CTA lands in a free call and the paid front
  // door never actually collects money.
  const calLink = `growthstackhq/discovery?utm_source=growthstackhq&utm_medium=website&utm_campaign=discovery_call&utm_content=${utmContent}`;

  return (
    <button
      data-cal-link={calLink}
      data-cal-namespace="discovery"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
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
