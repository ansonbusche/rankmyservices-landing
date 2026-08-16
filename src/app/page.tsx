import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SearchShift } from "@/components/SearchShift";
import { SEOvsGEO } from "@/components/SEOvsGEO";
import { VisibilityProblem } from "@/components/VisibilityProblem";
import { HowGEOWorks } from "@/components/HowGEOWorks";
import { GEOServices } from "@/components/GEOServices";
import { AuditSection } from "@/components/AuditSection";
import { IndustryExamples } from "@/components/IndustryExamples";
import { Testimonials } from "@/components/Testimonials";
import { ROICalculator } from "@/components/ROICalculator";
import { FitSection } from "@/components/FitSection";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";
import { faqSchema } from "@/lib/faq-data";
import { BookingCTA } from "@/components/BookingCTA";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SearchShift />
        <SEOvsGEO />
        <VisibilityProblem />
        <HowGEOWorks />
        <GEOServices />
        <AuditSection />
        <IndustryExamples />
        <Testimonials />
        <ROICalculator />
        <FitSection />
        <Process />
        <FAQ />
        <BookingCTA />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
