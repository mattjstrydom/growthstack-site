import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | GrowthStack",
  description:
    "Privacy Policy for GrowthStack covering website analytics, contact form submissions, and booking requests.",
  alternates: {
    canonical: absoluteUrl("/privacy-policy"),
  },
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "rgba(255,255,255,0.65)",
                maxWidth: "700px",
              }}
            >
              This page explains what information GrowthStack collects through
              this website and how it is used.
            </p>
          </div>
        </section>

        <section style={{ padding: "72px 0 96px" }}>
          <div className="max-w-[760px] mx-auto px-6 lg:px-8">
            <div style={{ display: "grid", gap: "28px", color: "#444" }}>
              <section>
                <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "10px" }}>
                  Information We Collect
                </h2>
                <p style={{ lineHeight: 1.8 }}>
                  If you submit the contact form, we collect the details you
                  provide, such as your name, email address, company, funding
                  stage, and message. If you book a discovery call, the booking
                  provider may collect scheduling and contact details needed to
                  complete the booking.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "10px" }}>
                  How We Use It
                </h2>
                <p style={{ lineHeight: 1.8 }}>
                  We use submitted information to respond to inquiries, evaluate
                  whether there is a fit for a commercial conversation, and
                  improve the performance of the site and booking flow.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "10px" }}>
                  Tracking and Third Parties
                </h2>
                <p style={{ lineHeight: 1.8 }}>
                  This site uses Google Tag Manager for analytics, Cal.com for
                  booking, and Formspree for contact form processing. Each
                  service may process information required to deliver its part
                  of the experience.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "10px" }}>
                  Contact
                </h2>
                <p style={{ lineHeight: 1.8 }}>
                  For privacy-related questions, email{" "}
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
