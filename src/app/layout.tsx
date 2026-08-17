import type { Metadata } from "next";
import { Inter, Fraunces, Syne } from "next/font/google";
import "./globals.css";
import { BRAND_NAME, SITE_URL } from "@/lib/config";
import { ChatWidget } from "@/components/ChatWidget";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const title = `GEO Services | Get Found in ChatGPT & AI Search | ${BRAND_NAME}`;
const description =
  "Increase your business's visibility across ChatGPT, Claude, Gemini, Perplexity and AI-powered search. See which competitors AI recommends and learn how to improve your AI search presence.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${BRAND_NAME}`,
  },
  description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: BRAND_NAME,
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND_NAME,
  url: SITE_URL,
  description:
    "AI Search Visibility company helping established businesses increase how often they are discovered, cited, and recommended by ChatGPT, Claude, Gemini, Perplexity, and AI-powered search.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Generative Engine Optimization (GEO) / AI Search Visibility",
  provider: {
    "@type": "Organization",
    name: BRAND_NAME,
  },
  areaServed: "US",
  description:
    "We help established, owner-led businesses improve how frequently they are discovered, mentioned, cited, and recommended when customers ask AI platforms who to hire.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${syne.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        {children}
        <ChatWidget />
                <a
                            href="tel:+13855033839"
                            className="fixed bottom-4 left-4 z-50 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-lg hover:shadow-xl transition-shadow"
                          >
                          Call us: 385-503-3839
                </a>
              <Script
                          src="https://widgets.leadconnectorhq.com/loader.js"
                          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
                          data-widget-id="6a8354f98b6f957b433381d4"
                          data-source="WEB_USER"
                          strategy="afterInteractive"
                        />
      </body>
    </html>
  );
}
