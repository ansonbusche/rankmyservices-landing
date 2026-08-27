import type { Metadata } from "next";
import { RoofingPreCallView } from "@/components/RoofingPreCallView";

export const metadata: Metadata = {
  title: "See How Your Roofing Company Ranks in Search & AI",
  description:
    "Watch a 60-second breakdown of how Google search and AI search are changing who homeowners hire, then book your free Search & AI Visibility Call with RankMyServices.",
  alternates: { canonical: "/roofingpre-call" },
  robots: { index: false, follow: false },
};

export default function RoofingPreCallPage() {
  return <RoofingPreCallView />;
}
