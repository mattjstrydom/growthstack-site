import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuickChatEmbed from "@/components/QuickChatEmbed";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quick Chat | GrowthStack",
  description:
    "Book a short call with Matt at GrowthStack and pick a time that works for you.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: absoluteUrl("/quick-chat"),
  },
  openGraph: {
    title: "Quick Chat | GrowthStack",
    description:
      "Book a short call with Matt at GrowthStack and pick a time that works for you.",
    url: absoluteUrl("/quick-chat"),
  },
  twitter: {
    title: "Quick Chat | GrowthStack",
    description:
      "Book a short call with Matt at GrowthStack and pick a time that works for you.",
  },
};

export default function QuickChatPage() {
  const calLink =
    "https://cal.com/growthstackhq/quick-chat?embed=true&theme=light&utm_source=growthstackhq&utm_medium=website&utm_campaign=quick_chat&utm_content=quick_chat_page";

  return (
    <>
      <Navigation />
      <main style={{ paddingTop: "68px", background: "#0F1B2D" }}>
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            background:
              "radial-gradient(circle at top right, rgba(241,90,36,0.14) 0%, transparent 36%), #0F1B2D",
            padding: "88px 0 96px",
          }}
        >
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="max-w-[760px] mb-10">
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
                Quick Chat
              </div>

              <h1
                className="font-bold text-white leading-tight mb-4"
                style={{ fontSize: "clamp(2.2rem,4.8vw,4rem)" }}
              >
                Book a short call with Matt @ GrowthStack.
              </h1>

              <p
                style={{
                  fontSize: "1.125rem",
                  color: "rgba(255,255,255,0.68)",
                  lineHeight: 1.75,
                  maxWidth: "640px",
                }}
              >
                Pick a time that works for you below.
              </p>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "14px",
                boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
              }}
            >
              <QuickChatEmbed calLink={calLink} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
