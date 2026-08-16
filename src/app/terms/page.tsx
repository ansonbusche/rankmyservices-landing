import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BRAND_NAME, CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: true, follow: true },
};

export default function TermsOfService() {
  const updated = "August 16, 2026";

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-paper pb-24 pt-40 sm:pt-48">
        <div className="container-page max-w-3xl">
          <h1 className="font-display text-[2.2rem] font-bold tracking-tight text-ink sm:text-[2.8rem]">
            Terms of Service
          </h1>
          <p className="mt-3 text-[0.9rem] text-ink-faint">
            Last updated: {updated}
          </p>

          <div className="mt-10 space-y-9 text-[1rem] leading-relaxed text-ink-soft">
            <section>
              <h2 className="font-display text-[1.3rem] font-bold text-ink">
                1. Agreement
              </h2>
              <p className="mt-3">
                These terms govern your use of the {BRAND_NAME} website and
                the GEO (Generative Engine Optimization) services we
                describe on it. By using this site or engaging our services,
                you agree to these terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.3rem] font-bold text-ink">
                2. What the service is
              </h2>
              <p className="mt-3">
                {BRAND_NAME} helps established businesses build the content,
                schema, and authority signals that AI platforms (ChatGPT,
                Claude, Gemini, Perplexity, and similar) draw on when
                answering customer questions. This is an ongoing,
                monthly-cycle service, not a one-time deliverable, and any
                free audit or snapshot we offer is illustrative and provided
                to show current visibility, not a guarantee of results.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.3rem] font-bold text-ink">
                3. No guaranteed outcomes
              </h2>
              <p className="mt-3">
                AI answers shift by prompt, platform, personalization, and
                time — no one can guarantee a specific placement, ranking,
                or mention on ChatGPT, Claude, Gemini, Perplexity, or any
                other AI system, and we don&rsquo;t. Figures shown for
                illustration (sample visibility data, ROI examples, and
                similar) are explicitly labeled as such and are not
                predictions of your results.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.3rem] font-bold text-ink">
                4. Client responsibilities
              </h2>
              <p className="mt-3">
                For clients, timely website access, sign-off on new content
                before it publishes, and accurate business information are
                needed for us to do the work described. Delays on your end
                can delay the timeline of the engagement.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.3rem] font-bold text-ink">
                5. Acceptable use
              </h2>
              <p className="mt-3">
                You agree not to misuse this website — including attempting
                to disrupt it, scrape it at scale, or use it to submit false
                or fraudulent information through our forms or booking tools.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.3rem] font-bold text-ink">
                6. Limitation of liability
              </h2>
              <p className="mt-3">
                The website and any free audits or snapshots are provided
                &ldquo;as is.&rdquo; To the extent permitted by law,{" "}
                {BRAND_NAME} is not liable for indirect, incidental, or
                consequential damages arising from your use of this site or
                reliance on illustrative figures shown on it.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.3rem] font-bold text-ink">
                7. Changes to these terms
              </h2>
              <p className="mt-3">
                We may update these terms as the business evolves.
                We&rsquo;ll update the date above when we do; continued use
                of the site after a change means you accept the update.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[1.3rem] font-bold text-ink">
                8. Contact
              </h2>
              <p className="mt-3">
                Questions about these terms? Reach us at{" "}
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
