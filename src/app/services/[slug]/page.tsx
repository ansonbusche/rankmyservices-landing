import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookingCTA } from "@/components/BookingCTA";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { SERVICES, getServiceBySlug } from "@/lib/servicesData";
import { BRAND_NAME, SITE_URL } from "@/lib/config";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const title = `${service.name} ${service.accent} | ${BRAND_NAME}`;
  const description = service.description;

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/services/${service.slug}`,
      siteName: BRAND_NAME,
      title,
      description,
      locale: "en_US",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ServiceDetail service={service} />
      </main>
      <BookingCTA />
      <Footer />
      <StickyMobileCta />
    </>
  );
}
