// Lightweight analytics dispatcher. Wire this up to GA4 / Meta Pixel / LinkedIn
// Insight Tag by filling in the sendTo() branches — every call site in the app
// already fires the right event name and payload shape.

export type AnalyticsEvent =
  | "hero_cta_clicked"
  | "audit_cta_clicked"
  | "website_submitted"
  | "calendar_opened"
  | "call_booked"
  | "faq_opened"
  | "roi_calculated";

type EventPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    lintrk?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: AnalyticsEvent, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;

  // Google Analytics 4 (gtag.js) — expects window.dataLayer to exist.
  window.dataLayer?.push({ event, ...payload });

  // Meta Pixel — expects window.fbq to exist.
  window.fbq?.("trackCustom", event, payload);

  // LinkedIn Insight Tag conversion tracking would go here via window.lintrk.

  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", event, payload);
  }
}
