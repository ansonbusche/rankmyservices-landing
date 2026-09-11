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
  /** Cover-card fields, mirroring the printed case study sheets. */
  title: string;
  kicker: string;
  statValue: string;
  statDirection: "Increase" | "Decrease";
  statLabel: string;
  /** Full sheet, opened when the card is clicked. */
  image: string;
  /** Supporting detail shown alongside the sheet in the viewer. */
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
        title: "Roofing",
        kicker: "GEO Case Study",
        statValue: "50%",
        statDirection: "Increase",
        statLabel: "Number of AI Overview citations",
        image: "/case-studies/roofing-geo.jpg",
        industry: "ROOFING · CHARLOTTE, NC",
        metric: "+50% AI Overview citations",
        story:
          "Roof repair FAQs and cost guides, licensed-credential EEAT signals, and product schema lifted citations 50%, alongside 23% more clicks and 28% more impressions.",
      },
      {
        title: "Landscaping",
        kicker: "GEO Case Study",
        statValue: "54%",
        statDirection: "Increase",
        statLabel: "Number of AI Overview citations",
        image: "/case-studies/landscaping-geo.jpg",
        industry: "LANDSCAPING · AUSTIN, TX",
        metric: "+54% AI Overview citations",
        story:
          "Localized seasonal care guides answering “how-to” and “cost” questions drove a 55% rise in impressions and 20% growth in clicks.",
      },
      {
        title: "Plumbing",
        kicker: "GEO Case Study",
        statValue: "50%",
        statDirection: "Increase",
        statLabel: "Number of AI Overview citations",
        image: "/case-studies/plumbing-geo.jpg",
        industry: "PLUMBING · DENVER, CO",
        metric: "+50% AI Overview citations",
        story:
          "Long-tail, FAQ-driven content with author bios and article schema produced 22% more clicks and 27% more impressions.",
      },
      {
        title: "Construction",
        kicker: "GEO Case Study",
        statValue: "24%",
        statDirection: "Increase",
        statLabel: "Number of AI Overview citations",
        image: "/case-studies/construction-geo.jpg",
        industry: "CONSTRUCTION · NASHVILLE, TN",
        metric: "+24% AI Overview citations",
        story:
          "FAQ content on timelines, permits, and budgeting, plus project portfolios and builder bios, delivered 22% more clicks and 27% growth in impressions.",
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
        title: "Commercial HVAC",
        kicker: "SEO Case Study",
        statValue: "234%",
        statDirection: "Increase",
        statLabel: "Increase in organic traffic",
        image: "/case-studies/commercial-hvac-seo.jpg",
        industry: "COMMERCIAL HVAC · COLORADO SPRINGS, CO",
        metric: "+234% organic traffic",
        story:
          "Narrowing from broad residential terms to commercial HVAC and refrigeration grew organic traffic from 111 to 371 sessions a month, with 76% more users.",
      },
      {
        title: "Roofing",
        kicker: "SEO Case Study",
        statValue: "150%",
        statDirection: "Increase",
        statLabel: "Increase in key events (conversions)",
        image: "/case-studies/roofing-seo.jpg",
        industry: "ROOFING · TUCSON, AZ",
        metric: "+150% conversions",
        story:
          "A conversion-first strategy on high-intent pages lifted organic users 71% over nine months; ranking keywords climbed 63 to 108 and average position 24.7 to 17.6.",
      },
      {
        title: "HVAC & Air Quality",
        kicker: "SEO Case Study",
        statValue: "90%",
        statDirection: "Increase",
        statLabel: "Increase in total event count",
        image: "/case-studies/hvac-air-quality-seo.jpg",
        industry: "HVAC & AIR QUALITY",
        metric: "+90% total site events",
        story:
          "Intent mapping around queries like “air duct cleaning near me,” plus GA4 tracking fixes, grew organic users 30% and sessions 37%.",
      },
      {
        title: "Roofing & Exterior",
        kicker: "SEO Case Study",
        statValue: "83%",
        statDirection: "Increase",
        statLabel: "Increase in avg. engagement time",
        image: "/case-studies/roofing-exterior-seo.jpg",
        industry: "ROOFING & EXTERIOR · SOUTH GEORGIA",
        metric: "+83% engagement time",
        story:
          "Early-stage visibility work lifted impressions 17% and clicks 11%, moving average position from 32.8 to 26.2.",
      },
      {
        title: "Lawn Care",
        kicker: "SEO Case Study",
        statValue: "16%",
        statDirection: "Increase",
        statLabel: "Increase in search impressions",
        image: "/case-studies/lawn-care-seo.jpg",
        industry: "LAWN CARE · CONCORD, NC",
        metric: "+16% search impressions",
        story:
          "“Near me” and city-specific optimization grew organic users 11% and improved average keyword position from 39.5 to 34.3 while holding #1 for core services.",
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
        title: "Tree & Lawn Care",
        kicker: "Paid Search Case Study",
        statValue: "212%",
        statDirection: "Increase",
        statLabel: "90-day increase in conversions",
        image: "/case-studies/tree-lawn-care-paid-search.jpg",
        industry: "TREE & LAWN CARE",
        metric: "+212% conversions in 90 days",
        story:
          "Search plus Performance Max, with spend flexed from $2,500 to $500 and back to $5,000/mo, grew clicks 170% and delivered 553 total conversions since launch.",
      },
      {
        title: "Landscaping",
        kicker: "Paid Search Case Study",
        statValue: "210%",
        statDirection: "Increase",
        statLabel: "Increase in conversions",
        image: "/case-studies/landscaping-paid-search.jpg",
        industry: "LANDSCAPING",
        metric: "+210% conversions",
        story:
          "On a $4,500/mo budget, single-keyword ad groups and urgency-led copy drove 145% more clicks at a 42% lower CPC and 55% lower CPA.",
      },
      {
        title: "Roofing",
        kicker: "Paid Search Case Study",
        statValue: "165%",
        statDirection: "Increase",
        statLabel: "Increase in conversions",
        image: "/case-studies/roofing-paid-search.jpg",
        industry: "ROOFING",
        metric: "+165% conversions",
        story:
          "On an $8,000/mo budget, granular keyword targeting and service-specific landing pages lifted clicks 133% while cutting CPC 57% and CPA 62%.",
      },
      {
        title: "Multi-Market Roofing",
        kicker: "Paid Search Case Study",
        statValue: "94%",
        statDirection: "Increase",
        statLabel: "MoM increase in conversions",
        image: "/case-studies/multi-market-roofing-paid-search.jpg",
        industry: "MULTI-MARKET ROOFING · FLORIDA",
        metric: "+94% month-over-month conversions",
        story:
          "Geo-targeted, single-keyword campaigns across West Palm Beach, Martin/St Lucie, and Lakeland cut cost per conversion 49%, compounding since the 2023 restructure.",
      },
      {
        title: "HVAC",
        kicker: "Paid Search Case Study",
        statValue: "83%",
        statDirection: "Increase",
        statLabel: "Increase in conversions",
        image: "/case-studies/hvac-paid-search.jpg",
        industry: "HVAC",
        metric: "+83% total conversions",
        story:
          "Keyword precision, tailored geographic campaigns, and A/B tested copy raised click-through 50% and conversion rate 56% at a 41% lower CPA.",
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
        title: "Facebook Lead Generation",
        kicker: "Meta Ads Case Study",
        statValue: "30%",
        statDirection: "Decrease",
        statLabel: "Reduction in cost per lead",
        image: "/case-studies/facebook-lead-generation-meta.jpg",
        industry: "LOCAL SERVICE BUSINESS · FACEBOOK LEADS",
        metric: "-30% cost per lead",
        story:
          "A three-tier TOFU/MOFU/BOFU funnel with continuous creative testing drove cost per lead from $3.82 down to $2.67 — 50 leads on $190.99 of total ad spend.",
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
