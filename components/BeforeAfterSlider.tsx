'use client';

const systemLayers = [
  {
    title: 'HubSpot foundation',
    body: 'Lifecycle stages, pipelines, properties, and views set up so the CRM reflects how revenue actually moves.',
    accent: '#F15A24',
  },
  {
    title: 'Workflow automation',
    body: 'Routing, handoffs, task creation, and core automations reduce founder dependence and manual admin.',
    accent: '#4ADE80',
  },
  {
    title: 'Reporting and visibility',
    body: 'Dashboards and source-to-pipeline views show what is moving, where deals stall, and what needs attention.',
    accent: '#7DD3FC',
  },
];

const outcomes = [
  { value: '1', label: 'usable system' },
  { value: 'Clear', label: 'handoffs' },
  { value: 'Live', label: 'pipeline visibility' },
  { value: 'Ready', label: 'for activation' },
];

export default function BeforeAfterSlider() {
  return (
    <div style={{ marginBottom: '40px' }}>
      <div
        className="hero-system-preview"
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.1)',
          background:
            'linear-gradient(180deg, rgba(8,16,28,0.92) 0%, rgba(12,22,36,0.96) 100%)',
          boxShadow: '0 30px 70px rgba(7,12,20,0.38)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at top right, rgba(241,90,36,0.16) 0%, transparent 32%), radial-gradient(circle at 20% 80%, rgba(125,211,252,0.08) 0%, transparent 34%)',
          }}
        />

        <div
          className="hero-system-grid"
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
          }}
        >
          <div
            style={{
              padding: 'clamp(22px,4vw,34px)',
              borderRight: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#F15A24',
                marginBottom: '18px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  background: '#F15A24',
                  boxShadow: '0 0 12px rgba(241,90,36,0.8)',
                }}
              />
              What GrowthStack builds
            </div>

            <div style={{ display: 'grid', gap: '12px' }}>
              {systemLayers.map((layer, index) => (
                <div
                  key={layer.title}
                  className="hero-system-layer"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px',
                    padding: '18px 18px 16px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '9999px',
                        background: 'rgba(255,255,255,0.06)',
                        border: `1px solid ${layer.accent}44`,
                        color: layer.accent,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      0{index + 1}
                    </span>
                    <div
                      style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        lineHeight: 1.3,
                      }}
                    >
                      {layer.title}
                    </div>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.62)',
                      lineHeight: 1.7,
                    }}
                  >
                    {layer.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              padding: 'clamp(22px,4vw,34px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.42)',
                  marginBottom: '14px',
                }}
              >
                The result
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.35rem,2.6vw,1.9rem)',
                  fontWeight: 700,
                  lineHeight: 1.18,
                  color: '#FFFFFF',
                  marginBottom: '12px',
                }}
              >
                A GTM system founders can actually run, trust, and scale.
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.62)',
                  lineHeight: 1.75,
                  maxWidth: '440px',
                }}
              >
                Instead of scattered tools and manual follow-up, you get one
                operating layer for CRM structure, workflow logic, reporting, and
                activation.
              </p>
            </div>

            <div
              className="hero-system-outcomes"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '12px',
              }}
            >
              {outcomes.map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '14px',
                    padding: '16px 14px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: '#F6C7B6',
                      lineHeight: 1.1,
                      marginBottom: '4px',
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.73rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'rgba(255,255,255,0.42)',
                      lineHeight: 1.45,
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                paddingTop: '6px',
              }}
            >
              {['HubSpot', 'Pipelines', 'Automation', 'Reporting'].map((item) => (
                <span
                  key={item}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '8px 12px',
                    borderRadius: '9999px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    fontSize: '0.78rem',
                    color: 'rgba(255,255,255,0.72)',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '9999px',
                      background: '#F15A24',
                      display: 'inline-block',
                    }}
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-system-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .hero-system-preview {
            border-radius: 16px !important;
          }
          .hero-system-layer {
            border-radius: 14px !important;
          }
          .hero-system-outcomes {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
