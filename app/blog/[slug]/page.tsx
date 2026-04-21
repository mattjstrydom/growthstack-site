import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookDiscoveryButton from '@/components/BookDiscoveryButton';
import { getPost, getAllSlugs, getRelatedPosts } from '@/lib/posts';
import { absoluteUrl, jsonLd, siteConfig } from '@/lib/site';
import { Eyebrow, primaryButtonHoverStyle, primaryButtonStyle } from '@/components/MarketingPrimitives';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | GrowthStack`,
    description: post.description,
    alternates: {
      canonical: absoluteUrl(`/blog/${slug}`),
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: absoluteUrl(`/blog/${slug}`),
      images: [
        {
          url: absoluteUrl(`/blog/${slug}/opengraph-image`),
          width: 1200,
          height: 630,
          alt: `${post.h1} preview image`,
        },
      ],
    },
    twitter: {
      title: post.title,
      description: post.description,
      images: [absoluteUrl(`/blog/${slug}/twitter-image`)],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const relatedPosts = getRelatedPosts(slug);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.h1,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: absoluteUrl(`/blog/${slug}`),
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(siteConfig.ogImage),
      },
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: absoluteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: absoluteUrl('/blog'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.h1,
        item: absoluteUrl(`/blog/${slug}`),
      },
    ],
  };

  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '68px' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
        />

        <section style={{ background: '#0F1B2D', padding: '80px 0 56px' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <Link
              href="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.45)',
                textDecoration: 'none',
                marginBottom: '28px',
                transition: 'color 0.2s',
              }}
            >
              ← Back to Blog
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '5px 12px',
                  background: 'rgba(241,90,36,0.15)',
                  border: '1px solid rgba(241,90,36,0.3)',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#FF8C5C',
                }}
              >
                {post.category}
              </span>
              <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)' }}>{post.date}</span>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
              <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)' }}>{post.readTime}</span>
            </div>

            <h1
              className="font-bold text-white leading-tight"
              style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', maxWidth: '760px' }}
            >
              {post.h1}
            </h1>
          </div>
        </section>

        <div style={{ background: '#fff' }}>
          <div
            className="post-body"
            style={{ maxWidth: '720px', margin: '0 auto', padding: '72px 28px 96px' }}
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>

        <section
          style={{
            background: '#F7F8F7',
            borderTop: '1px solid rgba(0,0,0,0.07)',
            padding: '64px 0',
          }}
        >
          <div className="max-w-[640px] mx-auto px-6 lg:px-8 text-center">
            <h2 style={{ fontSize: '1.625rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>
              Ready to build a working GTM system?
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(26,26,26,0.6)', marginBottom: '28px', lineHeight: 1.7 }}>
              GrowthStack helps early-stage B2B teams build HubSpot, pipeline,
              workflows, reporting, and activation into one usable commercial
              system. Book a discovery call to see if we&apos;re a fit.
            </p>
            <BookDiscoveryButton
              utmContent={`blog_post_${slug}`}
              className="inline-flex items-center justify-center gap-2 text-white font-semibold rounded-lg cursor-pointer"
              style={{ ...primaryButtonStyle, fontSize: '1rem' }}
              hoverStyle={primaryButtonHoverStyle}
            >
              Book a Discovery Call
            </BookDiscoveryButton>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section
            style={{
              background: '#FFFFFF',
              borderTop: '1px solid rgba(0,0,0,0.07)',
              padding: '64px 0 88px',
            }}
          >
            <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
              <div className="mb-10">
                <div className="mb-3">
                  <Eyebrow subtle>Keep Reading</Eyebrow>
                </div>
                <h2
                  style={{
                    fontSize: 'clamp(1.5rem,3vw,2.25rem)',
                    fontWeight: 700,
                    color: '#1A1A1A',
                    marginBottom: '10px',
                  }}
                >
                  Related guides worth reading next
                </h2>
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#555',
                    maxWidth: '620px',
                    lineHeight: 1.7,
                  }}
                >
                  More practical reading on HubSpot, RevOps, pipeline activation,
                  and early-stage GTM decisions.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <article
                      className="related-post-card h-full"
                      style={{
                        background: '#F7F8F7',
                        border: '1px solid #E2E5E2',
                        borderRadius: '16px',
                        padding: '24px',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#F15A24',
                          marginBottom: '14px',
                        }}
                      >
                        {relatedPost.category}
                      </div>
                      <h3
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: '#1A1A1A',
                          lineHeight: 1.4,
                          marginBottom: '12px',
                        }}
                      >
                        {relatedPost.h1}
                      </h3>
                      <p
                        style={{
                          fontSize: '0.92rem',
                          color: '#555',
                          lineHeight: 1.7,
                          marginBottom: '18px',
                        }}
                      >
                        {relatedPost.lede.slice(0, 135)}...
                      </p>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          color: 'rgba(26,26,26,0.45)',
                          paddingTop: '14px',
                          borderTop: '1px solid rgba(0,0,0,0.08)',
                        }}
                      >
                        {relatedPost.date} · {relatedPost.readTime}
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />

      <style>{`
        .post-body p { font-size: 1.0625rem; color: #444; line-height: 1.82; margin-bottom: 24px; }
        .post-body h2 { font-size: clamp(1.375rem,2.5vw,1.75rem); color: #1A1A1A; margin: 52px 0 16px; letter-spacing: -0.02em; font-weight: 700; }
        .post-body h3 { font-size: 1.2rem; color: #1A1A1A; margin: 36px 0 12px; font-weight: 600; }
        .post-body ul, .post-body ol { margin: 0 0 24px 0; padding-left: 0; list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .post-body li { font-size: 1.0625rem; color: #444; line-height: 1.72; padding-left: 24px; position: relative; }
        .post-body ul li::before { content: '→'; position: absolute; left: 0; color: #F15A24; font-weight: 700; }
        .post-body ol { counter-reset: list; }
        .post-body ol li { counter-increment: list; }
        .post-body ol li::before { content: counter(list) '.'; position: absolute; left: 0; color: #F15A24; font-weight: 700; font-size: 0.9rem; }
        .post-body strong { color: #1A1A1A; font-weight: 600; }
        .post-body a { color: #F15A24; text-decoration: underline; text-underline-offset: 3px; }
        .post-body a:hover { color: #D44E1E; }
        .post-body blockquote { margin: 36px 0; padding: 24px 28px; background: #F7F8F7; border-left: 3px solid #F15A24; border-radius: 0 8px 8px 0; }
        .post-body blockquote p { margin: 0; font-size: 1.0625rem; color: #1A1A1A; font-style: italic; }
        .post-body .callout { margin: 36px 0; padding: 24px 28px; background: #0F1B2D; border-radius: 12px; }
        .post-body .callout p { color: rgba(255,255,255,0.78); margin: 0; font-size: 1.0625rem; }
        .post-body .callout strong { color: #fff; }
        .post-body .post-divider { border: none; border-top: 1px solid rgba(0,0,0,0.08); margin: 48px 0; }
        .post-body .post-lede { background: #F7F8F7; border-left: 3px solid #F15A24; border-radius: 0 8px 8px 0; padding: 18px 22px; margin-bottom: 32px; }
        .post-body .post-lede strong { color: #1A1A1A; font-weight: 500; line-height: 1.75; }
        .post-body .faq-block { margin: 56px 0 0; }
        .post-body .faq-block h2 { font-size: clamp(1.375rem,2.5vw,1.75rem); color: #1A1A1A; margin-bottom: 8px; letter-spacing: -0.02em; }
        .post-body .faq-list { margin-top: 24px; }
        .post-body .faq-item { padding: 22px 0; border-bottom: 1px solid rgba(0,0,0,0.08); }
        .post-body .faq-item:first-child { border-top: 1px solid rgba(0,0,0,0.08); }
        .post-body .faq-q { font-size: 1rem; font-weight: 600; color: #1A1A1A; margin-bottom: 8px; }
        .post-body .faq-a { font-size: 0.9875rem; color: #444; line-height: 1.75; margin: 0; }
        .post-body .post-cta { display: none; }
        .post-body .post-nav { display: none; }
        .related-post-card:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(0,0,0,0.08); }
        @media(max-width:600px){
          .post-body{ padding: 48px 20px 64px; }
        }
      `}</style>
    </>
  );
}
