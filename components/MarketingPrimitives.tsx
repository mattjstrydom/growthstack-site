import type { CSSProperties, ReactNode } from 'react';

export const primaryButtonStyle: CSSProperties = {
  background: '#F15A24',
  padding: '14px 36px',
  fontSize: '1.0625rem',
  fontWeight: 600,
  borderRadius: '8px',
  boxShadow: '0 6px 28px rgba(241,90,36,0.5)',
};

export const primaryButtonHoverStyle: CSSProperties = {
  background: '#D44E1E',
  boxShadow: '0 8px 36px rgba(241,90,36,0.65)',
};

export const navButtonStyle: CSSProperties = {
  background: '#F15A24',
  padding: '10px 24px',
  fontSize: '0.9375rem',
  fontWeight: 600,
  borderRadius: '8px',
  boxShadow: '0 4px 20px rgba(241,90,36,0.45)',
};

export const navButtonHoverStyle: CSSProperties = {
  background: '#D44E1E',
  boxShadow: '0 6px 24px rgba(241,90,36,0.6)',
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
        background: 'rgba(241,90,36,0.08)',
        padding: '5px 12px',
        border: '1px solid rgba(241,90,36,0.25)',
        borderRadius: '9999px',
        letterSpacing: '0.08em',
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
            : '1px solid #E2E5E2',
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
