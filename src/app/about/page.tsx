import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { BookingCTA } from "@/components/BookingCTA";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { BRAND_NAME, SITE_URL } from "@/lib/config";

const title = `About ${BRAND_NAME} | SEO & AI Search Visibility`;
const description =
  "RankMyServices helps established, owner-led businesses rank higher on Google and get discovered, cited, and recommended by ChatGPT, Claude, Gemini, and Perplexity.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/about`,
    siteName: BRAND_NAME,
    title,
    description,
    locale: "en_US",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-paper pb-24 pt-40 sm:pt-48">
        <div className="container-page max-w-3xl">
          <h1 className="font-display text-[2.2rem] font-bold tracking-tight text-ink sm:text-[2.8rem]">
            About {BRAND_NAME}
          </h1>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
            <p>
              {BRAND_NAME} is an SEO and AI Search Visibility company. We
              help established, owner-led businesses rank higher on Google
              search while also increasing how often they&rsquo;re
              discovered, cited, and recommended by ChatGPT, Claude, Gemini,
              Perplexity, and other AI-powered search tools.
            </p>
            <p>
              We run SEO and GEO together as one monthly program instead of
              two disconnected services &mdash; technical and local SEO,
              content, and citations on one side, and the schema, authority
              signals, and AI-visibility tracking that AI platforms look for
              on the other.
            </p>
          </div>
        </div>
      </main>
      <BookingCTA />
      <Footer />
      <StickyMobileCta />
    </>
  );
}
