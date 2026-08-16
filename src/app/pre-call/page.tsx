import type { Metadata } from "next";
import { PreCallView } from "@/components/PreCallView";

export const metadata: Metadata = {
  title: "See How You Rank in AI Search",
  description:
    "Watch a 60-second breakdown of how AI search is changing who gets hired, then book your free AI Visibility Call with RankMyServices.",
  alternates: { canonical: "/pre-call" },
  robots: { index: false, follow: false },
};

export default function PreCallPage() {
  return <PreCallView />;
}
