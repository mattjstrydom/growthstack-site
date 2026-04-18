'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/* ─── data ─────────────────────────────────────────────────────── */
const BEFORE = [
  { value: '0',      label: 'Qualified Leads' },
  { value: '2%',     label: 'Response Rate'   },
  { value: '0 /mo',  label: 'Meetings Booked' },
  { value: 'Manual', label: 'Effort'          },
];

const AFTER = [
  { value: '38',     label: 'Qualified Leads' },
  { value: '9.2%',   label: 'Response Rate'   },
  { value: '12 /mo', label: 'Meetings Booked' },
  { value: 'Auto',   label: 'Effort'          },
];

/* ─── inner panel ───────────────────────────────────────────────── */
function Panel({ side }: { side: 'before' | 'after' }) {
  const isBefore = side === 'before';
  const accent    = isBefore ? '#FF6060' : '#4ADE80';
  const cardBg    = isBefore ? 'rgba(220,38,38,0.09)'  : 'rgba(34,197,94,0.09)';
  const cardBord  = isBefore ? 'rgba(220,38,38,0.18)'  : 'rgba(34,197,94,0.18)';
  const metrics   = isBefore ? BEFORE : AFTER;

  return (
    <div
      style={{
        position : 'absolute',
        inset    : 0,
        background: isBefore
          ? 'linear-gradient(140deg, rgba(180,20,20,0.10) 0%, #0A1520 100%)'
          : 'linear-gradient(140deg, #0D1C2E 0%, rgba(20,120,60,0.08) 100%)',
        padding       : 'clamp(14px, 3vw, 22px) clamp(14px, 3vw, 24px) 14px',
        display       : 'flex',
        flexDirection : 'column',
        gap           : '12px',
      }}
    >
      {/* ── header row ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flexWrap: 'nowrap' }}>
        <span style={{ fontSize: '0.85rem', lineHeight: 1, flexShrink: 0 }}>
          {isBefore ? '❌' : '✅'}
        </span>
        <span
          style={{
            fontSize     : 'clamp(0.58rem, 1.4vw, 0.68rem)',
            fontWeight   : 700,
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            color        : accent,
            whiteSpace   : 'nowrap',
          }}
        >
          {isBefore ? 'Without GrowthStack' : 'With GrowthStack'}
        </span>

        {/* status pill */}
        <span
          style={{
            marginLeft  : 'auto',
            display     : 'inline-flex',
            alignItems  : 'center',
            gap         : '4px',
            fontSize    : 'clamp(0.55rem, 1.2vw, 0.62rem)',
            color       : 'rgba(255,255,255,0.38)',
            whiteSpace  : 'nowrap',
            flexShrink  : 0,
          }}
        >
          <span
            style={{
              width       : '6px',
              height      : '6px',
              borderRadius: '50%',
              background  : accent,
              boxShadow   : `0 0 6px ${accent}`,
              display     : 'inline-block',
              flexShrink  : 0,
            }}
          />
          {isBefore ? 'STRUGGLING' : 'GROWING'}
        </span>
      </div>

      {/* ── metric cards ── */}
      <div
        style={{
          display            : 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap                : 'clamp(5px, 1vw, 8px)',
          flex               : 1,
        }}
      >
        {metrics.map((m, i) => (
          <div
            key={i}
            style={{
              background   : cardBg,
              border       : `1px solid ${cardBord}`,
              borderRadius : '8px',
              padding      : 'clamp(8px, 1.5vw, 12px) clamp(6px, 1.2vw, 10px)',
              display      : 'flex',
              flexDirection: 'column',
              gap          : '4px',
            }}
          >
            <div
              style={{
                fontSize           : 'clamp(1.1rem, 2.8vw, 1.7rem)',
                fontWeight         : 800,
                color              : accent,
                lineHeight         : 1,
                fontVariantNumeric : 'tabular-nums',
                letterSpacing      : '-0.02em',
              }}
            >
              {m.value}
            </div>
            <div
              style={{
                fontSize  : 'clamp(0.58rem, 1.3vw, 0.66rem)',
                color     : 'rgba(255,255,255,0.38)',
                lineHeight: 1.3,
                fontWeight: 500,
              }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── footer note ── */}
      <div
        style={{
          fontSize  : 'clamp(0.58rem, 1.3vw, 0.68rem)',
          color     : 'rgba(255,255,255,0.28)',
          fontStyle : 'italic',
          lineHeight: 1.3,
        }}
      >
        {isBefore
          ? 'Hours lost to manual prospecting. No predictable system.'
          : 'Pipeline running while you focus on building the product.'}
      </div>
    </div>
  );
}

/* ─── main component ────────────────────────────────────────────── */
export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging   = useRef(false);
  const [pos, setPos]         = useState(50);   // 0–100 %
  const [hintDone, setHintDone] = useState(false);

  /* intro nudge animation: 50 → 35 → 50 in the first 1.8 s */
  useEffect(() => {
    const tid = setTimeout(() => {
      let frame = 0;
      const FRAMES = 60;
      const tick = () => {
        frame++;
        if (isDragging.current) { setHintDone(true); return; }
        // ease out then ease back
        const t = frame / FRAMES;
        const eased = t < 0.5
          ? 2 * t * t
          : 1 - Math.pow(-2 * t + 2, 2) / 2;
        const target = frame <= FRAMES / 2 ? 35 : 50;
        setPos(prev => prev + (target - prev) * 0.12);
        if (frame < FRAMES) requestAnimationFrame(tick);
        else { setPos(50); setHintDone(true); }
      };
      requestAnimationFrame(tick);
    }, 900);
    return () => clearTimeout(tid);
  }, []);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    setPos(Math.min(95, Math.max(5, ((clientX - left) / width) * 100)));
  }, []);

  useEffect(() => {
    const onMove     = (e: MouseEvent)  => { if (isDragging.current) updatePos(e.clientX); };
    const onUp       = ()               => { isDragging.current = false; };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      updatePos(e.touches[0].clientX);
    };
    const onTouchEnd = () => { isDragging.current = false; };

    window.addEventListener('mousemove',  onMove);
    window.addEventListener('mouseup',    onUp);
    window.addEventListener('touchmove',  onTouchMove, { passive: false });
    window.addEventListener('touchend',   onTouchEnd);
    return () => {
      window.removeEventListener('mousemove',  onMove);
      window.removeEventListener('mouseup',    onUp);
      window.removeEventListener('touchmove',  onTouchMove);
      window.removeEventListener('touchend',   onTouchEnd);
    };
  }, [updatePos]);

  return (
    <div style={{ marginBottom: '40px' }}>
      {/* ── container ── */}
      <div
        ref={containerRef}
        style={{
          position    : 'relative',
          height      : 'clamp(190px, 28vw, 230px)',
          borderRadius: '14px',
          overflow    : 'hidden',
          cursor      : 'ew-resize',
          userSelect  : 'none',
          border      : '1px solid rgba(255,255,255,0.09)',
          touchAction : 'none',
        }}
        onMouseDown={e  => { isDragging.current = true; updatePos(e.clientX); }}
        onTouchStart={e => { isDragging.current = true; updatePos(e.touches[0].clientX); }}
      >
        {/* before — base layer */}
        <Panel side="before" />

        {/* after — revealed from the right */}
        <div
          style={{
            position : 'absolute',
            inset    : 0,
            clipPath : `inset(0 0 0 ${pos}%)`,
            willChange: 'clip-path',
          }}
        >
          <Panel side="after" />
        </div>

        {/* ── vertical divider line ── */}
        <div
          style={{
            position  : 'absolute',
            top       : 0,
            bottom    : 0,
            left      : `${pos}%`,
            width     : '2px',
            transform : 'translateX(-50%)',
            background: '#F15A24',
            zIndex    : 20,
            pointerEvents: 'none',
            willChange: 'left',
          }}
        />

        {/* ── drag handle ── */}
        <div
          style={{
            position  : 'absolute',
            top       : '50%',
            left      : `${pos}%`,
            transform : 'translate(-50%, -50%)',
            zIndex    : 30,
            pointerEvents: 'auto',
            willChange: 'left',
          }}
        >
          <div
            style={{
              width       : '40px',
              height      : '40px',
              borderRadius: '50%',
              background  : '#F15A24',
              display     : 'flex',
              alignItems  : 'center',
              justifyContent: 'center',
              boxShadow   : '0 0 0 3px rgba(241,90,36,0.25), 0 0 20px rgba(241,90,36,0.55), 0 2px 10px rgba(0,0,0,0.5)',
              cursor      : 'ew-resize',
              /* pulse on first load until user interacts */
              animation   : hintDone ? 'none' : 'gs-pulse 1.4s ease-in-out infinite',
            }}
          >
            {/* ←→ arrows */}
            <svg viewBox="0 0 22 14" width="22" height="14" fill="none">
              <path d="M1 7h20M6 2L1 7l5 5M16 2l5 5-5 5"
                stroke="white" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* "drag" hint label — fades out after interaction */}
          {!hintDone && (
            <div
              style={{
                position   : 'absolute',
                top        : '110%',
                left       : '50%',
                transform  : 'translateX(-50%)',
                marginTop  : '6px',
                fontSize   : '0.58rem',
                fontWeight : 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color      : 'rgba(255,255,255,0.45)',
                whiteSpace : 'nowrap',
                pointerEvents: 'none',
              }}
            >
              drag
            </div>
          )}
        </div>

        {/* ── corner labels ── */}
        <div style={{
          position    : 'absolute',
          bottom      : '10px',
          left        : '12px',
          fontSize    : '0.6rem',
          fontWeight  : 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color       : 'rgba(255,100,100,0.5)',
          pointerEvents: 'none',
          zIndex      : 5,
        }}>
          BEFORE
        </div>
        <div style={{
          position    : 'absolute',
          bottom      : '10px',
          right       : '12px',
          fontSize    : '0.6rem',
          fontWeight  : 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color       : 'rgba(74,222,128,0.5)',
          pointerEvents: 'none',
          zIndex      : 5,
        }}>
          AFTER
        </div>
      </div>

      {/* ── keyframes injected once ── */}
      <style>{`
        @keyframes gs-pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(241,90,36,0.25), 0 0 20px rgba(241,90,36,0.55), 0 2px 10px rgba(0,0,0,0.5); }
          50%       { box-shadow: 0 0 0 6px rgba(241,90,36,0.15), 0 0 32px rgba(241,90,36,0.70), 0 2px 10px rgba(0,0,0,0.5); }
        }
      `}</style>
    </div>
  );
}
