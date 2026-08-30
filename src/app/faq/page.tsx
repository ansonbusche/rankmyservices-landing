import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FAQ } from "@/components/FAQ";
import { faqSchema } from "@/lib/faq-data";
import { BookingCTA } from "@/components/BookingCTA";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { BRAND_NAME, SITE_URL } from "@/lib/config";

const title = "FAQ: SEO & GEO Questions Answered";
const description =
  "Answers to the most common questions about SEO, GEO, and AI search visibility — what it costs, how it works, and what to expect.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/faq`,
    siteName: BRAND_NAME,
    title,
    description,
    locale: "en_US",
  },
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="flex-1 bg-paper pb-24 pt-40 sm:pt-48">
        <div className="container-page max-w-3xl">
          <h1 className="font-display text-[2.2rem] font-bold tracking-tight text-ink sm:text-[2.8rem]">
            Frequently asked questions
          </h1>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
            Straight answers on how SEO and GEO work together, what we
            actually do each month, and what you can expect.
          </p>
        </div>
        <FAQ />
      </main>
      <BookingCTA />
      <Footer />
      <StickyMobileCta />
    </>
  );
}
