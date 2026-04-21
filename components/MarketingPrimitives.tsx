import type { CSSProperties, ReactNode } from 'react';

export const primaryButtonStyle: CSSProperties = {
  background: '#F15A24',
  padding: '14px 36px',
  fontSize: '1.0625rem',
  fontWeight: 600,
  borderRadius: '8px',
  boxShadow: '0 2px 12px rgba(241,90,36,0.35)',
};

export const primaryButtonHoverStyle: CSSProperties = {
  background: '#D44E1E',
  boxShadow: '0 4px 20px rgba(241,90,36,0.45)',
};

export const navButtonStyle: CSSProperties = {
  background: '#F15A24',
  padding: '10px 24px',
  fontSize: '0.9375rem',
  fontWeight: 600,
  borderRadius: '8px',
  boxShadow: '0 2px 12px rgba(241,90,36,0.35)',
};

export const navButtonHoverStyle: CSSProperties = {
  background: '#D44E1E',
  boxShadow: '0 4px 20px rgba(241,90,36,0.45)',
};

export const mobileButtonStyle: CSSProperties = {
  background: '#F15A24',
  padding: '12px 24px',
  fontSize: '0.9375rem',
  fontWeight: 600,
  borderRadius: '8px',
};

export function Eyebrow({
  children,
  subtle = false,
}: {
  children: ReactNode;
  subtle?: boolean;
}) {
  return (
    <div
      className="inline-flex items-center font-bold uppercase tracking-[0.1em] rounded-full"
      style={{
        fontSize: '0.72rem',
        color: '#F15A24',
        background: subtle ? 'transparent' : 'rgba(241,90,36,0.12)',
        padding: subtle ? undefined : '6px 14px',
        border: subtle ? undefined : '1px solid rgba(241,90,36,0.25)',
      }}
    >
      {children}
    </div>
  );
}

export function CardShell({
  children,
  dark = false,
  highlighted = false,
  padding = '40px 36px',
}: {
  children: ReactNode;
  dark?: boolean;
  highlighted?: boolean;
  padding?: string;
}) {
  const isDark = dark || highlighted;

  return (
    <div
      className="rounded-2xl relative overflow-hidden"
      style={{
        background: isDark ? '#0F1B2D' : '#FFFFFF',
        border: highlighted
          ? '1px solid rgba(241,90,36,0.35)'
          : isDark
            ? '1px solid rgba(255,255,255,0.07)'
            : '1px solid #E2E5E2',
        padding,
      }}
    >
      {children}
    </div>
  );
}
