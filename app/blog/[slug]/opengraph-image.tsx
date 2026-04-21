import { ImageResponse } from 'next/og';
import { getPost } from '@/lib/posts';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  const title = post?.h1 ?? 'GrowthStack Blog';
  const category = post?.category ?? 'Blog';
  const summary =
    post?.description ??
    'Practical GTM, RevOps, HubSpot, and pipeline guides for early-stage B2B startups.';

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
          padding: '56px 64px',
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
            maxWidth: '980px',
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
            {category}
          </div>
          <div
            style={{
              fontSize: '58px',
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: '-0.045em',
              marginBottom: '20px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: '27px',
              lineHeight: 1.35,
              color: 'rgba(255,255,255,0.72)',
            }}
          >
            {summary.length > 140 ? `${summary.slice(0, 137)}...` : summary}
          </div>
        </div>
      </div>
    ),
    size
  );
}
