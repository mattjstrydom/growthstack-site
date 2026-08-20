import type { CSSProperties, ReactNode } from 'react';

/* Controls sit at 12px radius with a 500 weight label, following handoff.ai.
   The old 4px-radius, 600-weight buttons read as a template; this reads as a
   product. */

export const primaryButtonStyle: CSSProperties = {
  background: '#F15A24',
  padding: '13px 24px',
  fontSize: '1rem',
  fontWeight: 500,
  borderRadius: '12px',
  boxShadow: '0 1px 2px rgba(11,21,36,0.12), inset 0 1px 0 rgba(255,255,255,0.16)',
  color: '#ffffff',
  border: '1px solid rgba(255,255,255,0.12)',
  transition: 'background 0.18s ease, transform 0.18s ease',
};

export const primaryButtonHoverStyle: CSSProperties = {
  background: '#D44E1E',
  transform: 'translateY(-1px)',
};

export const secondaryButtonStyle: CSSProperties = {
  background: 'transparent',
  padding: '13px 24px',
  fontSize: '1rem',
  fontWeight: 500,
  borderRadius: '12px',
  color: '#16181D',
  border: '1px solid rgba(22,24,29,0.16)',
  transition: 'border-color 0.18s ease, background 0.18s ease',
};

export const secondaryButtonHoverStyle: CSSProperties = {
  borderColor: 'rgba(22,24,29,0.4)',
  background: 'rgba(22,24,29,0.03)',
};

export const navButtonStyle: CSSProperties = {
  background: '#F15A24',
  padding: '9px 18px',
  fontSize: '0.9375rem',
  fontWeight: 500,
  borderRadius: '10px',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.16)',
  color: '#ffffff',
  transition: 'background 0.18s ease',
};

export const navButtonHoverStyle: CSSProperties = {
  background: '#D44E1E',
};

export const mobileButtonStyle: CSSProperties = {
  background: '#F15A24',
  padding: '12px 24px',
  fontSize: '0.9375rem',
  fontWeight: 500,
  borderRadius: '10px',
  color: '#ffffff',
};

/**
 * Small caps label above a heading. `subtle` switches it for dark surfaces.
 * The dashed border is gone: a filled dot plus letterspaced caps is quieter
 * and stops every section opening with a rectangle.
 */
export function Eyebrow({
  children,
  subtle = false,
}: {
  children: ReactNode;
  subtle?: boolean;
}) {
  return (
    <div
      className="inline-flex items-center gap-2 uppercase"
      style={{
        fontSize: '0.7rem',
        fontWeight: 600,
        letterSpacing: '0.14em',
        color: subtle ? '#FF9264' : '#F15A24',
      }}
    >
      <span
        aria-hidden
        style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: 'currentColor',
          display: 'inline-block',
        }}
      />
      {children}
    </div>
  );
}

/**
 * Standard section wrapper. Keeps vertical rhythm and max width consistent so
 * pages stop drifting apart as they get edited.
 */
export function Section({
  children,
  tone = 'light',
  width = 1100,
  className = '',
  id,
  style,
}: {
  children: ReactNode;
  tone?: 'light' | 'sand' | 'dark' | 'dark-flat';
  width?: number;
  className?: string;
  id?: string;
  style?: CSSProperties;
}) {
  const toneClass =
    tone === 'dark' ? 'gs-dark' : tone === 'dark-flat' ? 'gs-dark-flat' : '';

  const toneStyle: CSSProperties =
    tone === 'sand'
      ? {
          background: '#FDFAF6',
          borderTop: '1px solid #EFE9E1',
          borderBottom: '1px solid #EFE9E1',
        }
      : tone === 'light'
        ? { background: '#ffffff' }
        : {};

  return (
    <section
      id={id}
      className={`${toneClass} ${className}`}
      style={{ padding: '96px 0', ...toneStyle, ...style }}
    >
      <div
        className="mx-auto px-6 lg:px-8"
        style={{ maxWidth: `${width}px` }}
      >
        {children}
      </div>
    </section>
  );
}

/**
 * Heading block: eyebrow, headline, optional lede. Used at the top of every
 * section so the type hierarchy is identical everywhere.
 */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = 'light',
  align = 'left',
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
}) {
  const dark = tone === 'dark';
  return (
    <div
      style={{
        marginBottom: '44px',
        textAlign: align,
        maxWidth: align === 'center' ? '760px' : undefined,
        marginInline: align === 'center' ? 'auto' : undefined,
      }}
    >
      {eyebrow && (
        <div
          style={{
            marginBottom: '16px',
            display: 'flex',
            justifyContent: align === 'center' ? 'center' : 'flex-start',
          }}
        >
          <Eyebrow subtle={dark}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className="gs-display-lg"
        style={{ color: dark ? '#ffffff' : '#16181D', margin: 0 }}
      >
        {title}
      </h2>
      {lede && (
        <p
          className="gs-lede"
          style={{
            marginTop: '18px',
            marginInline: align === 'center' ? 'auto' : undefined,
            maxWidth: '720px',
            color: dark ? 'rgba(255,255,255,0.62)' : '#4A4A4A',
          }}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

/**
 * Hairline-divided row of numbers on a dark panel, after handoff.ai's results
 * strip. Deliberately holds few items: a wall of metrics on a site with no
 * named clients reads as padding.
 */
export function StatBand({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="gs-stat-band">
      {items.map((item) => (
        <div key={item.label}>
          <div
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
              fontWeight: 500,
              color: '#FF9264',
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            {item.value}
          </div>
          <div
            style={{
              marginTop: '12px',
              fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.5,
            }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function CardShell({
  children,
  dark = false,
  highlighted = false,
  padding = '32px 30px',
}: {
  children: ReactNode;
  dark?: boolean;
  highlighted?: boolean;
  padding?: string;
}) {
  const isDark = dark || highlighted;

  return (
    <div
      className={isDark ? 'gs-card-dark' : 'gs-card'}
      style={{
        padding,
        ...(highlighted
          ? { borderColor: 'rgba(255,146,100,0.45)' }
          : {}),
      }}
    >
      {children}
    </div>
  );
}
