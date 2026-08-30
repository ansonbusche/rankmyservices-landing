import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { GEOServices } from "@/components/GEOServices";
import { SEOServices } from "@/components/SEOServices";
import { BookingCTA } from "@/components/BookingCTA";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { BRAND_NAME, SITE_URL } from "@/lib/config";

const title = `Our Services | SEO & GEO, Every Month | ${BRAND_NAME}`;
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
      <Navbar />
      <main className="flex-1 bg-paper pb-24 pt-40 sm:pt-48">
        <div className="container-page max-w-3xl">
          <h1 className="font-display text-[2.2rem] font-bold tracking-tight text-ink sm:text-[2.8rem]">
            What we do, every month
          </h1>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
            One monthly cycle covering both sides of search: the SEO work
            that ranks you in Google, and the GEO work that gets you
            recommended by AI.
          </p>
        </div>
        <GEOServices />
        <SEOServices />
      </main>
      <BookingCTA />
      <Footer />
      <StickyMobileCta />
    </>
  );
}
