import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GrowthStack | Outbound for Early-Stage Startups",
  description: "Done-for-you outbound for early-stage startups. We build your cold email + LinkedIn system and run it monthly. From $2,500 — live in 10 days.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1A1A1A]">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K9FXGZQ5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* Cal.com embed — loaded directly so popup is always available */}
        <Script
          id="cal-embed"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(C,A,L){let p=function(a,ar){a.q.push(ar)};let d=C.document;C.Cal=C.Cal||function(){let cal=C.Cal;let ar=arguments;if(!cal.loaded){cal.ns={};cal.q=cal.q||[];d.head.appendChild(d.createElement("script")).src=A;cal.loaded=true}if(ar[0]===L){const api=function(){p(api,arguments)};const namespace=ar[1];api.q=api.q||[];if(typeof namespace==="string"){cal.ns[namespace]=cal.ns[namespace]||api;p(cal.ns[namespace],ar);p(cal,["initNamespace",namespace])}else p(cal,ar);return}p(cal,ar)}})(window,"https://app.cal.com/embed/embed.js","init");
Cal("init","discovery",{origin:"https://app.cal.com"});
Cal.ns.discovery("ui",{"cssVarsPerTheme":{"light":{"cal-brand":"#292929"},"dark":{"cal-brand":"#F15A24"}},"hideEventTypeDetails":false,"layout":"month_view"});`,
          }}
        />

        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K9FXGZQ5');`,
          }}
        />
      </body>
    </html>
  );
}
