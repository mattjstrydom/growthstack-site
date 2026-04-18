'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookDiscoveryButton from '@/components/BookDiscoveryButton';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch('https://formspree.io/f/xjgpoggq', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      setSubmitted(true);
    } catch {
      alert('Something went wrong. Please email hello@growthstackhq.com directly.');
    } finally {
      setSubmitting(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '11px 14px',
    fontSize: '0.9375rem',
    border: '1px solid #D8DBD8',
    borderRadius: '8px',
    outline: 'none',
    background: '#fff',
    color: '#1A1A1A',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#1A1A1A',
    marginBottom: '6px',
  };

  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '68px' }}>

        {/* Hero */}
        <section style={{ background: '#0F1B2D', padding: '80px 0 72px' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div
              className="inline-flex items-center font-bold uppercase tracking-[0.1em] rounded-full mb-6"
              style={{ fontSize: '0.72rem', color: '#F15A24', background: 'rgba(241,90,36,0.12)', padding: '6px 14px', border: '1px solid rgba(241,90,36,0.25)' }}
            >
              Get In Touch
            </div>
            <h1 className="font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Let&apos;s talk.
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
              Send us a message and we&apos;ll reply within one business day.
            </p>
          </div>
        </section>

        {/* Contact split */}
        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">

              {/* Left: info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Email card */}
                <div style={{ background: '#F7F8F7', border: '1px solid #E2E5E2', borderRadius: '16px', padding: '28px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>✉️</div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '6px' }}>Email Us Directly</h4>
                    <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.65, marginBottom: '8px' }}>Prefer to skip the form? Email us and we&apos;ll reply within one business day.</p>
                    <a href="mailto:hello@growthstackhq.com" style={{ color: '#F15A24', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>hello@growthstackhq.com</a>
                  </div>
                </div>
                {/* Global card */}
                <div style={{ background: '#F7F8F7', border: '1px solid #E2E5E2', borderRadius: '16px', padding: '28px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>🌍</div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '6px' }}>We work globally</h4>
                    <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.65 }}>We&apos;ve run campaigns for founders in the US, UK, and East Africa. Wherever your buyers are, we can help you reach them.</p>
                  </div>
                </div>
                {/* Discovery call card */}
                <div style={{ background: '#0F1B2D', borderRadius: '16px', padding: '28px' }}>
                  <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F15A24', marginBottom: '16px' }}>What to expect on a discovery call</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                    {[
                      ["01", "We'll ask about your ICP and current setup (5 min)"],
                      ["02", "We'll share what a realistic outbound motion looks like for your stage (10 min)"],
                      ["03", "If it's a fit, we'll scope Phase 1 and give you a clear next step (15 min)"],
                    ].map(([num, text]) => (
                      <div key={num} style={{ display: 'flex', gap: '14px', fontSize: '0.875rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.55 }}>
                        <span style={{ color: '#F15A24', fontWeight: 700, flexShrink: 0, width: '20px' }}>{num}</span>
                        {text}
                      </div>
                    ))}
                  </div>
                  <BookDiscoveryButton
                    utmContent="contact_cta"
                    style={{
                      width: '100%',
                      padding: '12px 24px',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      borderRadius: '8px',
                      background: '#F15A24',
                      color: '#fff',
                      boxShadow: '0 2px 12px rgba(241,90,36,0.35)',
                    }}
                    hoverStyle={{ background: '#D44E1E' }}
                  >
                    Book a Discovery Call
                  </BookDiscoveryButton>
                </div>
              </div>

              {/* Right: form */}
              <div style={{ background: '#F7F8F7', border: '1px solid #E2E5E2', borderRadius: '16px', padding: '36px' }}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '16px', color: '#F15A24' }}>✓</div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '10px' }}>Message sent!</h4>
                    <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.7 }}>
                      We&apos;ll be in touch within one business day. Feel free to read{' '}
                      <a href="/blog" style={{ color: '#F15A24' }}>our blog</a> in the meantime.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>Send us a message</h3>
                    <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '28px', lineHeight: 1.6 }}>Tell us about your company and what you&apos;re working on — we&apos;ll come to any call prepared.</p>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div>
                          <label style={labelStyle} htmlFor="fname">First name <span style={{ color: '#F15A24' }}>*</span></label>
                          <input type="text" id="fname" name="fname" placeholder="Jane" required autoComplete="given-name" style={inputStyle} />
                        </div>
                        <div>
                          <label style={labelStyle} htmlFor="lname">Last name <span style={{ color: '#F15A24' }}>*</span></label>
                          <input type="text" id="lname" name="lname" placeholder="Smith" required autoComplete="family-name" style={inputStyle} />
                        </div>
                      </div>
                      <div>
                        <label style={labelStyle} htmlFor="email">Work email <span style={{ color: '#F15A24' }}>*</span></label>
                        <input type="email" id="email" name="email" placeholder="jane@company.com" required autoComplete="email" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle} htmlFor="company">Company</label>
                        <input type="text" id="company" name="company" placeholder="Acme Inc." autoComplete="organization" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle} htmlFor="stage">Funding stage</label>
                        <select id="stage" name="stage" style={{ ...inputStyle, cursor: 'pointer' }}>
                          <option value="">Select stage…</option>
                          <option>Pre-seed / bootstrapped</option>
                          <option>Seed</option>
                          <option>Series A</option>
                          <option>Series B+</option>
                          <option>Not applicable</option>
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle} htmlFor="message">What are you working on? <span style={{ color: '#F15A24' }}>*</span></label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Briefly describe what you're building, who you're selling to, and what your outbound situation looks like right now."
                          required
                          style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                        />
                      </div>
                      {/* Honeypot */}
                      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                      <button
                        type="submit"
                        disabled={submitting}
                        style={{
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                          padding: '13px 32px',
                          fontSize: '1rem', fontWeight: 600,
                          background: submitting ? '#ccc' : '#F15A24',
                          color: '#fff',
                          border: 'none', borderRadius: '8px',
                          cursor: submitting ? 'not-allowed' : 'pointer',
                          boxShadow: '0 2px 12px rgba(241,90,36,0.3)',
                          transition: 'background 0.2s',
                        }}
                      >
                        {submitting ? 'Sending…' : 'Send Message'}
                        {!submitting && (
                          <svg viewBox="0 0 16 16" fill="none" style={{ width: '16px', height: '16px' }}>
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </button>
                      <p style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.4)', textAlign: 'center' }}>We reply within one business day. No unsolicited follow-ups.</p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
