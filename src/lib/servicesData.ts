export type PricingTier = {
  name: string;
  sub?: string;
  goal?: string;
  popular?: boolean;
  features: string[];
  price: string;
  per: string;
  setupFee?: string;
  stripeUrl?: string;
};

export type CaseStudy = {
  industry: string;
  metric: string;
  story: string;
};

export type ServiceIcon = "geo" | "seo" | "gads" | "mads";

export type ServiceCategory = {
  slug: string;
  label: string;
  name: string;
  accent: string;
  icon: ServiceIcon;
  shortDescription: string;
  description: string;
  chips: string[];
  highlights: string[];
  caseStudies: CaseStudy[];
  pricingNote?: string;
  tiers: PricingTier[];
};

export const SERVICES: ServiceCategory[] = [
  {
    slug: "geo",
    label: "GEO",
    name: "GEO",
    accent: "Visibility",
    icon: "geo",
    shortDescription:
      "Get named inside ChatGPT, Claude, Gemini and Perplexity answers — not just ranked on a page.",
    description:
      "Generative-engine optimization built to keep your brand visible when customers ask ChatGPT, Claude, Gemini, or Perplexity who to hire — not just when they Google you. A steady monthly cycle of authority content, schema, and citations that AI systems can trust and cite.",
    chips: ["AI Overviews", "ChatGPT", "Claude", "Perplexity"],
    highlights: [
      "Constant client support",
      "FAQ + article schema every cycle",
      "1 new authority page monthly",
      "AI visibility tracked across 4 platforms",
    ],
    caseStudies: [
      {
        industry: "ROOFING · UTAH",
        metric: "0 → 6 AI mentions",
        story:
          "Went from unrecommended to appearing in 6 of 10 “best roofer near me” AI answers over one quarter.",
      },
      {
        industry: "HVAC · ARIZONA",
        metric: "+38% AI share of voice",
        story:
          "Authority content and schema pushed the brand ahead of two long-standing local competitors in AI answers.",
      },
      {
        industry: "REMODELING · TEXAS",
        metric: "12 citations added",
        story:
          "New author and entity schema made the business easier for AI systems to verify and recommend.",
      },
    ],
    tiers: [
      {
        name: "Full-Service GEO",
        sub: "AI Search Visibility Stack",
        goal: "Goal: become the answer AI gives",
        features: [
          "Constant Client Support",
          "FAQ Schema Creation",
          "Monthly Reporting",
          "Article and Author Schema Creation",
          "SGE Response Analysis and Monitoring",
          "Thought Leadership Content Strategy",
          "Keyword Research for Informational Keywords",
          "Structured Markup for Every Content",
          "1 New Page of Content Monthly",
          "AI Visibility Across Google AI Overviews, ChatGPT, Perplexity & Claude",
        ],
        price: "985",
        per: "Month",
        stripeUrl: "https://buy.stripe.com/aFadR862p7yhgKde7Z63K00",
      },
    ],
  },
  {
    slug: "seo",
    label: "SEO",
    name: "SEO",
    accent: "Growth",
    icon: "seo",
    shortDescription:
      "Four tiers of managed local & national SEO, built to scale from your town to multi-state authority.",
    description:
      "Full-service SEO built to scale from owning your small town to multi-state e-commerce keyword targeting. Technical SEO, content, citations, and Google Business Profile management, running on the same monthly cycle — every tier built to compound.",
    chips: ["Local SEO", "Technical SEO", "Content", "GBP"],
    highlights: [
      "Constant client support",
      "Custom local strategy every tier",
      "Routine technical audits",
      "Content silo strategy & internal linking",
    ],
    caseStudies: [
      {
        industry: "PLUMBING · IDAHO",
        metric: "+61% organic traffic",
        story:
          "Technical fixes and a content silo strategy compounded over two quarters of steady publishing.",
      },
      {
        industry: "FLOORING · UTAH",
        metric: "Top 3 local pack",
        story:
          "Citation building and GBP management moved the business into the local 3-pack for its core service terms.",
      },
      {
        industry: "ROOFING · COLORADO",
        metric: "4x indexed pages",
        story: "Monthly content and internal linking gave Google far more of the site to rank.",
      },
    ],
    tiers: [
      {
        name: "Backyard",
        sub: "1 Town",
        goal: "Goal: Own their small town",
        features: [
          "50 Citation Submissions",
          "1 New Page of Content Monthly",
          "Onsite SEO",
          "CRO Evaluation",
          "Technical SEO",
          "Custom Local Strategy",
          "Internal Linking Strategy",
          "Routine Audits",
          "Content Silo Evaluation & Strategy",
          "GBP Management & Posting",
        ],
        price: "858",
        per: "Month",
        stripeUrl: "https://buy.stripe.com/aFa8wObmJcSB2Tn7JB63K01",
      },
      {
        name: "Suburbs Takeover",
        sub: "2 Cities",
        goal: "Goal: Own a radius around town",
        features: [
          "100 Citation Submissions",
          "2 New Pages of Content Monthly",
          "Onsite SEO",
          "CRO Evaluation",
          "Technical SEO",
          "Custom Local Strategy",
          "Internal Linking Strategy",
          "Routine Audits",
          "Content Silo Evaluation & Strategy",
          "GBP Management & Posting",
        ],
        price: "1,386",
        per: "Month",
        stripeUrl: "https://buy.stripe.com/fZudR8eyV3i11Pj7JB63K02",
      },
      {
        name: "Metropolitan Dominance",
        sub: "Surrounding areas or 1 major city",
        goal: "Goal: Dominate metro areas",
        popular: true,
        features: [
          "150 Citation Submissions",
          "3 New Pages of Content Monthly",
          "Onsite SEO",
          "CRO Evaluation",
          "Technical SEO",
          "Custom Local Strategy",
          "Internal Linking Strategy",
          "Routine Audits",
          "Content Silo Evaluation & Strategy",
          "GBP Management & Posting",
        ],
        price: "2,231",
        per: "Month",
        stripeUrl: "https://buy.stripe.com/dRmdR8gH3cSB1PjbZR63K03",
      },
      {
        name: "National",
        sub: "Multi-State Authority",
        goal: "Goal: Broad keyword targeting",
        features: [
          "200 Citation Submissions",
          "4 New Pages of Content Monthly",
          "Onsite SEO",
          "CRO Evaluation",
          "Technical SEO",
          "Custom Local Strategy",
          "Internal Linking Strategy",
          "Routine Audits",
          "Content Silo Evaluation & Strategy",
          "AI Optimization (GEO)",
        ],
        price: "2,856",
        per: "Month",
        stripeUrl: "https://buy.stripe.com/4gM9AS2Qd3i10Lf3tl63K04",
      },
    ],
  },
  {
    slug: "google-ads",
    label: "Google Ads",
    name: "Google",
    accent: "Ads",
    icon: "gads",
    shortDescription:
      "Done-for-you Google Ads — copywriting, retargeting, and weekly optimization, scaled to your spend.",
    description:
      "Done-for-you Google Ads management — copywriting, retargeting, weekly optimization, and conversion tracking, scaled to your monthly ad spend. Every plan includes A/B tested copy and offer creation, not just campaign babysitting.",
    chips: ["Search Ads", "Retargeting", "A/B Testing", "Conversion Tracking"],
    highlights: [
      "Weekly optimization, not monthly",
      "Copywriting included on every plan",
      "Retargeting setup with display ad",
      "Offer creation & conversion optimization",
    ],
    caseStudies: [
      {
        industry: "HVAC · NEVADA",
        metric: "-34% cost per lead",
        story:
          "Weekly bid and offer optimization brought down cost per lead across two emergency-service campaigns.",
      },
      {
        industry: "REMODELING · UTAH",
        metric: "+22 booked consults/mo",
        story: "Retargeting plus a reworked offer turned browsers into booked consultations.",
      },
      {
        industry: "PLUMBING · ARIZONA",
        metric: "2.1x conversion rate",
        story: "A/B tested ad copy and landing offers roughly doubled the on-site conversion rate.",
      },
    ],
    tiers: [
      {
        name: "Basic",
        sub: "Best for ad spend $1,500–$2,500/mo",
        features: [
          "Constant Client Support",
          "1 Campaign",
          "Copywriting Included",
          "Retargeting Setup (Display Ad Required)",
          "Weekly Optimization",
          "Monthly Reporting",
          "A/B Testing of Copy",
          "Offer Creation",
          "Conversion Optimization",
        ],
        price: "792",
        per: "Month",
        setupFee: "+ $600 one-time setup fee",
      },
      {
        name: "Advanced",
        sub: "Best for ad spend $2,501–$3,500/mo",
        popular: true,
        features: [
          "Constant Client Support",
          "2–3 Campaigns",
          "Copywriting Included",
          "Retargeting Setup (Display Ad Required)",
          "Weekly Optimization",
          "Monthly Reporting",
          "A/B Testing of Copy",
          "Offer Creation",
          "Conversion Optimization",
        ],
        price: "1,188",
        per: "Month",
        setupFee: "+ $950 one-time setup fee",
      },
      {
        name: "Pro",
        sub: "Best for ad spend $3,501–$5,000/mo",
        features: [
          "Constant Client Support",
          "4–5 Campaigns",
          "Copywriting Included",
          "Retargeting Setup (Display Ad Required)",
          "Weekly Optimization",
          "Monthly Reporting",
          "A/B Testing of Copy",
          "Offer Creation",
          "Conversion Optimization",
        ],
        price: "1,386",
        per: "Month",
        setupFee: "+ $1,350 one-time setup fee",
      },
    ],
  },
  {
    slug: "meta-ads",
    label: "Meta Ads",
    name: "Meta",
    accent: "Ads",
    icon: "mads",
    shortDescription:
      "Facebook & Instagram campaigns built from the scroll-by perspective — strategy and creative aligned.",
    description:
      "Facebook and Instagram are powerful sales tools — when strategy and creativity align. We craft campaigns from the user’s perspective, focused on what actually captures attention, drives clicks, and converts.",
    chips: ["Facebook", "Instagram", "Creative Testing", "Lookalike Audiences"],
    highlights: [
      "Fresh creatives every month",
      "Custom & lookalike audience setup",
      "Advantage+ campaign testing",
      "A/B tested copy and creative",
    ],
    caseStudies: [
      {
        industry: "FLOORING · UTAH",
        metric: "+3.4x retargeting CTR",
        story:
          "Fresh monthly creative and a rebuilt retargeting pixel lifted click-through on warm audiences.",
      },
      {
        industry: "ROOFING · TEXAS",
        metric: "48K reach / week",
        story: "Lookalike audiences built from past customers expanded reach without raising spend.",
      },
      {
        industry: "REMODELING · IDAHO",
        metric: "-27% cost per lead form",
        story: "Advantage+ testing found the creative and audience combination that converted best.",
      },
    ],
    pricingNote: "For budgets exceeding $5,000/month, contact sales@rankmyservices.io.",
    tiers: [
      {
        name: "Basic",
        sub: "Best for ad spend up to $1,500/mo",
        features: [
          "1 Campaign · Up to 5 Ad Sets",
          "Copywriting Included",
          "Up to 4 New Creatives / Month",
          "Retargeting Pixel & Lead Form Setup",
          "Custom Audience Setup",
          "Max 4 Ad Copy Tests / Month",
          "Weekly Optimization",
          "Monthly Reporting",
        ],
        price: "630",
        per: "Month",
        setupFee: "+ $660 one-time setup fee",
      },
      {
        name: "Advanced",
        sub: "Best for ad spend $1,501–$3,000/mo",
        popular: true,
        features: [
          "2–3 Campaigns · Up to 5 Ad Sets each",
          "Copywriting Included",
          "Up to 6 New Creatives / Month",
          "Retargeting Pixel & Lead Form Setup",
          "Custom & Lookalike Audience Setup",
          "Advantage+ Campaign Testing",
          "Max 6 Ad Copy Tests / Month",
          "Weekly Optimization",
          "A/B Testing of Copy & Creative",
          "Monthly Reporting",
        ],
        price: "1,380",
        per: "Month",
        setupFee: "+ $950 one-time setup fee",
      },
      {
        name: "Pro",
        sub: "Best for ad spend $3,001–$5,000/mo",
        features: [
          "4–5 Campaigns · Up to 5 Ad Sets each",
          "Copywriting Included",
          "Up to 10 New Creatives / Month",
          "Retargeting Pixel & Lead Form Setup",
          "Custom & Lookalike Audience Setup",
          "Advantage+ Campaign Testing",
          "Max 10 Ad Copy Tests / Month",
          "Weekly Optimization",
          "A/B Testing of Copy & Creative",
          "Monthly Reporting",
        ],
        price: "1,780",
        per: "Month",
        setupFee: "+ $1,350 one-time setup fee",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
