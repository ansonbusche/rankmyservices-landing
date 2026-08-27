// Central place for values you'll swap in before launch.
// Nothing below needs to change to run the site locally.

export const BRAND_NAME = "RankMyServices";

export const SITE_URL = "https://rankmyservices.io";

export const CALENDLY_URL = "https://calendly.com/christian-rankmyservices/30min";

export const CONTACT_EMAIL = "christian@rankmyservices.io";

export const PRIMARY_CTA = "See How You Rank in AI Search";
export const PRIMARY_CTA_SHORT = "See Your AI Visibility";

// Section links use an absolute "/#..." path (not a bare "#...") for any
// section that only exists on the homepage, so they still work correctly
// when clicked from a different page (e.g. /seo) instead of silently doing
// nothing. Sections that exist on every page using <Navbar /> (SEO vs GEO,
// FAQ) can stay as plain in-page hashes.
export const NAV_LINKS = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "SEO vs GEO", href: "#what-is-geo" },
  { label: "SEO Services", href: "/seo" },
  { label: "What We Optimize", href: "/#services" },
  { label: "FAQ", href: "#faq" },
] as const;
