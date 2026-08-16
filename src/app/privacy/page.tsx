import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BRAND_NAME, CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  const updated = "August 16, 2026";

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-paper pb-24 pt-40 sm:pt-48">
        <div className="container-page max-w-3xl">
          <h1 className="font-display text-[2.2rem] font-bold tracking-tight text-ink sm:text-[2.8rem]">
            Privacy Policy
          </h1>
          <p className="mt-3 text-[0.9rem] text-ink-faint">
            Last updated: {updated}
          </p>

          <div className="mt-10 space-y-9 text-[1rem] leading-relaxed text-ink-soft">
            <section>
              <h2 className="font-display text-[1.3rem] font-bold text-ink">
                1. What we collect
              </h2>
              <p className="mt-3">
                When you request an AI visibility snapshot, book a call, or
                contact us, we collect the information you provide directly —
                typically your name, email address, business website, and
                any details you share about your company. If you become a
                client, we also collect the website access and business
                information needed to deliver the service.
              </p>
              <p className="mt-3">
                Like most websites, we automatically collect basic usage data
                (pages visited, general location, device/browser type)
                through standard analytics to understand how {BRAND_NAME} is
                used and to improve it.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.3rem] font-bold text-ink">
                2. How we use it
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>To run the AI-search visibility audits we offer</li>
                <li>To respond to inquiries and schedule calls</li>
                <li>To deliver and report on GEO services for clients</li>
                <li>
                  To improve this website and understand what&rsquo;s working
                </li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information, and we do not
                share it with third parties for their own marketing
                purposes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.3rem] font-bold text-ink">
                3. Third-party services
              </h2>
              <p className="mt-3">
                We use a small number of third-party tools to run this site
                and business, including scheduling software (Calendly) to
                book calls and standard web analytics. These providers
                process data under their own privacy policies. We don&rsquo;t
                control, and aren&rsquo;t responsible for, how AI platforms
                (ChatGPT, Claude, Gemini, Perplexity, and similar) process
                data when they generate answers — our service analyzes their
                public outputs, it doesn&rsquo;t interact with your data on
                those platforms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.3rem] font-bold text-ink">
                4. Data retention
              </h2>
              <p className="mt-3">
                We keep contact and client information for as long as
                it&rsquo;s needed to provide the service and maintain
                reasonable business records, and delete it on request where
                we&rsquo;re not required to keep it for legal or accounting
                reasons.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.3rem] font-bold text-ink">
                5. Your choices
              </h2>
              <p className="mt-3">
                You can ask us to access, correct, or delete the personal
                information we hold about you at any time by contacting us
                at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-signal underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.3rem] font-bold text-ink">
                6. Changes to this policy
              </h2>
              <p className="mt-3">
                If this policy changes materially, we&rsquo;ll update the
                date above. Continued use of the site after changes means
                you accept the updated policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.3rem] font-bold text-ink">
                7. Contact
              </h2>
              <p className="mt-3">
                Questions about this policy? Reach us at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-signal underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
