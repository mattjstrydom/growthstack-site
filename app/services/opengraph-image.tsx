import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background:
            'radial-gradient(circle at top right, rgba(241,90,36,0.24) 0%, transparent 34%), #0F1B2D',
          color: '#FFFFFF',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '8px',
          }}
        >
          <div style={{ width: '18px', height: '36px', borderRadius: '4px', background: '#F15A24' }} />
          <div style={{ width: '18px', height: '58px', borderRadius: '4px', background: '#F15A24' }} />
          <div style={{ width: '18px', height: '82px', borderRadius: '4px', background: '#F15A24' }} />
          <div
            style={{
              marginLeft: '16px',
              fontSize: '38px',
              fontWeight: 700,
              letterSpacing: '-0.03em',
            }}
          >
            GrowthStack
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '920px',
          }}
        >
          <div
            style={{
              fontSize: '22px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#F15A24',
              marginBottom: '18px',
            }}
          >
            Services
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '62px',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.05em',
              marginBottom: '22px',
            }}
          >
            <div style={{ display: 'flex' }}>GTM systems for</div>
            <div style={{ display: 'flex' }}>repeatable pipeline.</div>
          </div>
          <div
            style={{
              fontSize: '30px',
              lineHeight: 1.4,
              color: 'rgba(255,255,255,0.72)',
            }}
          >
            GTM foundation, HubSpot and RevOps, pipeline activation, and ongoing
            optimisation for early-stage B2B startups.
          </div>
        </div>
      </div>
    ),
    size
  );
}
