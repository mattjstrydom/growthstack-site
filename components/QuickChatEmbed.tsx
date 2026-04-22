'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

interface QuickChatEmbedProps {
  calLink: string;
}

export default function QuickChatEmbed({ calLink }: QuickChatEmbedProps) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'quick_chat_page_view',
      page_path: window.location.pathname,
      cal_link: calLink,
    });
  }, [calLink]);

  const handleLoad = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'quick_chat_calendar_load',
      page_path: window.location.pathname,
      cal_link: calLink,
    });
  };

  return (
    <iframe
      src={calLink}
      title="Book a quick chat with GrowthStack"
      style={{
        width: '100%',
        minHeight: '920px',
        border: '0',
        borderRadius: '14px',
        background: '#fff',
      }}
      loading="lazy"
      onLoad={handleLoad}
    />
  );
}
