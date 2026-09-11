import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { GEOServices } from "@/components/GEOServices";
import { SEOServices } from "@/components/SEOServices";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { ServiceTabs } from "@/components/services/ServiceTabs";
import { BookingCTA } from "@/components/BookingCTA";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { BRAND_NAME, SITE_URL } from "@/lib/config";

const title = "Our Services: SEO & GEO, Every Month";
const description =
  "What we do every month: technical and local SEO, content, and citations, plus the GEO work that keeps you visible in ChatGPT, Claude, Gemini, and Perplexity.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services`,
    siteName: BRAND_NAME,
    title,
    description,
    locale: "en_US",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar hub />
      <main className="flex-1 bg-paper pb-24 pt-[72px]">
        <ServiceTabs />

        <section className="border-b border-night-soft bg-night pb-14 pt-14 sm:pt-16">
          <div className="container-page max-w-3xl">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-signal">
              Our services
            </span>
            <h1 className="mt-3 font-display text-[2.2rem] font-bold tracking-tight text-cream-on-dark sm:text-[2.8rem]">
              What we do, every month
            </h1>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-cream-on-dark-soft">
              One monthly cycle covering both sides of search: the SEO work
              that ranks you in Google, and the GEO work that gets you
              recommended by AI.
            </p>
          </div>
        </section>

        <section className="border-b border-night-soft bg-night-soft py-14">
          <div className="container-page">
            <ServiceGrid />
          </div>
        </section>
        <GEOServices />
        <SEOServices />
      </main>
      <BookingCTA />
      <Footer />
      <StickyMobileCta />
    </>
  );
}
