import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { SEOHero } from "@/components/SEOHero";
import { SEOvsGEO } from "@/components/SEOvsGEO";
import { SEOServices } from "@/components/SEOServices";
import { IndustryExamples } from "@/components/IndustryExamples";
import { AuditSection } from "@/components/AuditSection";
import { FAQ } from "@/components/FAQ";
import { faqSchema } from "@/lib/faq-data";
import { BookingCTA } from "@/components/BookingCTA";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { BRAND_NAME, SITE_URL } from "@/lib/config";

const title = `SEO Services | Rank Higher on Google | ${BRAND_NAME}`;
const description =
  "Full-service SEO — technical, on-page, local, content, and citations — fulfilled through our white-label SEO partner and layered with GEO so you show up in Google search and AI answers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/seo" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/seo`,
    siteName: BRAND_NAME,
    title,
    description,
    locale: "en_US",
  },
};

export default function SEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="flex-1">
        <SEOHero />
        <SEOvsGEO />
        <SEOServices />
        <IndustryExamples />
        <AuditSection />
        <FAQ />
        <BookingCTA />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
