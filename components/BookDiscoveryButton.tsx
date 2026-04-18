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
