import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { ContactForm } from "@/components/ContactForm";
import { BRAND_NAME, CONTACT_EMAIL, SITE_URL } from "@/lib/config";

const title = `Contact ${BRAND_NAME} | SEO & GEO Services`;
const description =
  "Get in touch with RankMyServices — send a message or reach us directly by phone or email.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/contact`,
    siteName: BRAND_NAME,
    title,
    description,
    locale: "en_US",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-paper pb-24 pt-40 sm:pt-48">
        <div className="container-page max-w-xl">
          <h1 className="font-display text-[2.2rem] font-bold tracking-tight text-ink sm:text-[2.8rem]">
            Get in touch
          </h1>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
            Send us a message and we&rsquo;ll reply from {CONTACT_EMAIL}, or
            reach us directly below.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-signal"
            >
              <Mail className="size-4" />
              {CONTACT_EMAIL}
            </a>
            <a
              href="tel:+13855033839"
              className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-signal"
            >
              <Phone className="size-4" />
              385-503-3839
            </a>
          </div>

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
