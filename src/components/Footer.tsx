import Link from "next/link";
import { Radio } from "lucide-react";
import { BRAND_NAME } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-night-soft bg-night py-12">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5 text-cream-on-dark">
            <span className="flex size-7 items-center justify-center rounded-full bg-signal text-white">
              <Radio className="size-3.5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-[1rem] font-bold tracking-tight">{BRAND_NAME}</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.85rem] text-cream-on-dark-soft">
            <Link href="/services" className="hover:text-cream-on-dark">Services</Link>
            <Link href="/seo" className="hover:text-cream-on-dark">SEO Services</Link>
            <Link href="/faq" className="hover:text-cream-on-dark">FAQ</Link>
            <Link href="/about" className="hover:text-cream-on-dark">About</Link>
            <Link href="/privacy" className="hover:text-cream-on-dark">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cream-on-dark">Terms</Link>
            <Link href="/contact" className="hover:text-cream-on-dark">Contact</Link>
          </div>
        </div>

        <div className="mt-8 border-t border-border-on-dark pt-6">
          <p className="max-w-3xl text-[0.78rem] leading-relaxed text-cream-on-dark-soft/70">
            AI-generated recommendations vary by model, prompt, user context,
            location, and available information. We do not guarantee
            placement or rankings on third-party AI platforms.
          </p>
          <p className="mt-3 text-[0.78rem] text-cream-on-dark-soft/70">
            &copy; {year} {BRAND_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
