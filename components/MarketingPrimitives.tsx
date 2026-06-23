import type { CSSProperties, ReactNode } from 'react';

export const primaryButtonStyle: CSSProperties = {
  background: '#F15A24',
  padding: '14px 36px',
  fontSize: '1.0625rem',
  fontWeight: 600,
  borderRadius: '4px',
  boxShadow: 'none',
  color: '#ffffff',
  transition: 'background 0.15s ease',
};

export const primaryButtonHoverStyle: CSSProperties = {
  background: '#d94e1a',
  boxShadow: 'none',
};

export const navButtonStyle: CSSProperties = {
  background: '#F15A24',
  padding: '10px 24px',
  fontSize: '0.9375rem',
  fontWeight: 600,
  borderRadius: '4px',
  boxShadow: 'none',
  color: '#ffffff',
  transition: 'background 0.15s ease',
};

export const navButtonHoverStyle: CSSProperties = {
  background: '#d94e1a',
  boxShadow: 'none',
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
        background: 'transparent',
        padding: '5px 13px',
        border: '1px dashed rgba(241,90,36,0.6)',
        borderRadius: '4px',
        letterSpacing: '0.1em',
        fontWeight: 600,
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
          ? '1px solid rgba(241,90,36,0.65)'
          : isDark
            ? '1px solid rgba(255,255,255,0.07)'
            : '1px solid #e5e7eb',
        padding,
        boxShadow: highlighted
          ? '0 0 0 1px rgba(241,90,36,0.15), inset 0 1px 0 rgba(255,255,255,0.04)'
          : undefined,
      }}
    >
      {children}
    </div>
  );
}
