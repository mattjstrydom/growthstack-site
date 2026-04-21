import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions | GrowthStack",
  description:
    "Terms and conditions for using the GrowthStack website and requesting contact or booking information.",
  alternates: {
    canonical: absoluteUrl("/terms-and-conditions"),
  },
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: "68px", background: "#fff" }}>
        <section style={{ background: "#0F1B2D", padding: "80px 0 72px" }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div
              className="inline-flex items-center font-bold uppercase tracking-[0.1em] rounded-full mb-6"
              style={{
                fontSize: "0.72rem",
                color: "#F15A24",
                background: "rgba(241,90,36,0.12)",
                padding: "6px 14px",
                border: "1px solid rgba(241,90,36,0.25)",
              }}
            >
              Legal
            </div>
            <h1
              className="font-bold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
            >
              Terms &amp; Conditions
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "rgba(255,255,255,0.65)",
                maxWidth: "700px",
              }}
            >
              These terms govern use of the GrowthStack website and related
              inquiry and booking flows.
            </p>
          </div>
        </section>

        <section style={{ padding: "72px 0 96px" }}>
          <div className="max-w-[760px] mx-auto px-6 lg:px-8">
            <div style={{ display: "grid", gap: "28px", color: "#444" }}>
              <section>
                <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "10px" }}>
                  Website Use
                </h2>
                <p style={{ lineHeight: 1.8 }}>
                  The site is provided for informational purposes and to help
                  prospective clients evaluate GrowthStack services. Use of the
                  site does not create a client relationship by itself.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "10px" }}>
                  No Guarantee
                </h2>
                <p style={{ lineHeight: 1.8 }}>
                  Content on the site describes GrowthStack&apos;s offer,
                  process, and perspective. It should not be interpreted as a
                  guarantee of commercial outcomes, booked meetings, or revenue.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "10px" }}>
                  Third-Party Services
                </h2>
                <p style={{ lineHeight: 1.8 }}>
                  This website relies on third-party services for analytics,
                  booking, and contact form processing. Their availability and
                  behavior may affect how parts of the site function.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "10px" }}>
                  Contact
                </h2>
                <p style={{ lineHeight: 1.8 }}>
                  For questions about these terms, email{" "}
                  <a href="mailto:hello@growthstackhq.com" style={{ color: "#F15A24" }}>
                    hello@growthstackhq.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
