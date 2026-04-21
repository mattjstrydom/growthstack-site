import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { posts } from '@/lib/posts';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Blog | GrowthStack - GTM, RevOps, HubSpot and Pipeline Systems',
  description: 'Practical guides on HubSpot setup, CRM structure, RevOps, outbound activation, and GTM systems for early-stage B2B startups.',
  alternates: {
    canonical: absoluteUrl('/blog'),
  },
  openGraph: {
    title: 'Blog | GrowthStack - GTM, RevOps, HubSpot and Pipeline Systems',
    description: 'Practical guides on HubSpot setup, CRM structure, RevOps, outbound activation, and GTM systems for early-stage B2B startups.',
    url: absoluteUrl('/blog'),
  },
  twitter: {
    title: 'Blog | GrowthStack - GTM, RevOps, HubSpot and Pipeline Systems',
    description: 'Practical guides on HubSpot setup, CRM structure, RevOps, outbound activation, and GTM systems for early-stage B2B startups.',
  },
};

const EMOJI_MAP: Record<string, string> = {
  'deliverability-slim': '📬',
  'lead-to-meeting-engine': '🎯',
  'scaling-too-soon': '💰',
  'scaling-outbound-sends': '📈',
  'revenue-infrastructure': '🏗️',
  'technical-abm': '🎯',
  'outsource-outbound-vs-hire-sdr': '⚖️',
  'cold-email-deliverability-guide': '📡',
  'cold-email-spam-fix': '🔍',
  'cold-email-agency-cost': '💷',
  'b2b-outbound-playbook': '🗺️',
  'cold-email-warmup-guide': '🔥',
};

function parseDate(d: string): number {
  const date = new Date(d);
  return Number.isNaN(date.getTime()) ? 0 : date.getTime();
}

const sortedPosts = [...posts].sort((a, b) => parseDate(b.date) - parseDate(a.date));

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '68px' }}>
        <section
          style={{
            background: '#0F1B2D',
            padding: '80px 0 72px',
          }}
        >
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div
              className="inline-flex items-center font-bold uppercase tracking-[0.1em] rounded-full mb-6"
              style={{
                fontSize: '0.72rem',
                color: '#F15A24',
                background: 'rgba(241,90,36,0.12)',
                padding: '6px 14px',
                border: '1px solid rgba(241,90,36,0.25)',
              }}
            >
              Resources
            </div>
            <h1
              className="font-bold text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}
            >
              GTM systems that actually work.
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.65)', maxWidth: '620px', lineHeight: 1.7 }}>
              Practical guides on HubSpot, RevOps, pipeline design, activation, and
              GTM strategy written for early-stage B2B teams building a repeatable
              revenue motion.
            </p>
          </div>
        </section>

        <section style={{ background: '#F7F8F7', padding: '64px 0 96px' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div
              className="grid gap-6"
              style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}
            >
              {sortedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block no-underline"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <article
                    className="blog-card-inner h-full flex flex-col rounded-xl overflow-hidden"
                    style={{
                      background: '#fff',
                      border: '1px solid rgba(0,0,0,0.07)',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                      transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                    }}
                  >
                    <div
                      className="flex items-center justify-center"
                      style={{
                        background: '#0F1B2D',
                        height: '100px',
                        fontSize: '2.5rem',
                      }}
                    >
                      {EMOJI_MAP[post.slug] || '📝'}
                    </div>

                    <div className="flex flex-col flex-1 p-6">
                      <div
                        className="font-semibold uppercase tracking-[0.08em] mb-3"
                        style={{ fontSize: '0.7rem', color: '#F15A24' }}
                      >
                        {post.category}
                      </div>
                      <h3
                        className="font-bold leading-snug mb-3 flex-1"
                        style={{ fontSize: '1.0625rem', color: '#1A1A1A' }}
                      >
                        {post.h1}
                      </h3>
                      <p
                        className="leading-relaxed mb-4"
                        style={{ fontSize: '0.875rem', color: 'rgba(26,26,26,0.6)' }}
                      >
                        {post.lede.slice(0, 140)}…
                      </p>
                      <div
                        className="flex items-center gap-3 pt-4"
                        style={{ borderTop: '1px solid rgba(0,0,0,0.06)', fontSize: '0.78rem', color: 'rgba(26,26,26,0.45)' }}
                      >
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`.blog-card-inner:hover{box-shadow:0 8px 32px rgba(0,0,0,0.12)!important;transform:translateY(-2px)}`}</style>
    </>
  );
}
