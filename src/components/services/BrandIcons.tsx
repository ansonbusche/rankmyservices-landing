import { type SVGProps } from "react";

// Simplified, monochrome marks so every service chip reads at a glance.
// The platform marks (ChatGPT, Claude, Perplexity, Google, Facebook,
// Instagram) are deliberately NOT the exact trademarked artwork -- they are
// hand-drawn approximations, so nothing here requires a logo licence. The
// rest are plain concept glyphs. Each is sized off currentColor so it
// inherits chip text color.

function IconBase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      aria-hidden="true"
      {...props}
    />
  );
}

export function ChatGPTIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4.5" width="18" height="11.5" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 16 6.3 19.8 11 16Z" fill="currentColor" />
    </IconBase>
  );
}

export function ClaudeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 3v6" />
        <path d="M12 15v6" />
        <path d="M4.2 7l5.2 3" />
        <path d="M14.6 14l5.2 3" />
        <path d="M19.8 7l-5.2 3" />
        <path d="M9.4 14l-5.2 3" />
      </g>
    </IconBase>
  );
}

export function PerplexityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7l2.6 5-2.6 5-2.6-5Z" fill="currentColor" />
    </IconBase>
  );
}

export function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <text x="12" y="16" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fontWeight="700" fill="currentColor">
        G
      </text>
    </IconBase>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="12" fontFamily="Georgia, serif" fontWeight="700" fill="currentColor">
        f
      </text>
    </IconBase>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.6" cy="7.4" r="1" fill="currentColor" />
    </IconBase>
  );
}

/* -- Concept glyphs for the non-platform chips, so all four service cards
   carry icons instead of only GEO and Meta. -- */

export function LocalSeoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 21c4-4.2 6-7.4 6-10a6 6 0 1 0-12 0c0 2.6 2 5.8 6 10Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="10.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
    </IconBase>
  );
}

export function TechnicalSeoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </g>
      <circle cx="9" cy="7" r="2" fill="currentColor" />
      <circle cx="15" cy="12" r="2" fill="currentColor" />
      <circle cx="8" cy="17" r="2" fill="currentColor" />
    </IconBase>
  );
}

export function ContentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M6 3h8l4 4v14H6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M9 12h6" />
        <path d="M9 16h6" />
      </g>
    </IconBase>
  );
}

export function GbpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 10h16v10H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M3 10l1.8-5h14.4L21 10" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </IconBase>
  );
}

export function SearchAdsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15.5 15.5 20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </IconBase>
  );
}

export function RetargetingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </IconBase>
  );
}

export function AbTestingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="3.5" y="5" width="17" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 5v14" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2.5 2.5" />
      <text x="7.7" y="15.4" textAnchor="middle" fontSize="8" fontFamily="Arial, sans-serif" fontWeight="700" fill="currentColor">
        A
      </text>
      <text x="16.3" y="15.4" textAnchor="middle" fontSize="8" fontFamily="Arial, sans-serif" fontWeight="700" fill="currentColor">
        B
      </text>
    </IconBase>
  );
}

export function ConversionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 16.5 9.5 11l3.5 3.5L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 7h5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  );
}

export function CreativeTestingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 3.5l1.9 5.6 5.6 1.9-5.6 1.9L12 18.5l-1.9-5.6L4.5 11l5.6-1.9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </IconBase>
  );
}

export function LookalikeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="9" cy="12" r="5.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="15" cy="12" r="5.2" stroke="currentColor" strokeWidth="1.6" />
    </IconBase>
  );
}

export const CHIP_ICONS: Record<string, (props: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  // Platform marks
  ChatGPT: ChatGPTIcon,
  Claude: ClaudeIcon,
  Perplexity: PerplexityIcon,
  "AI Overviews": GoogleIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  // Concept glyphs
  "Local SEO": LocalSeoIcon,
  "Technical SEO": TechnicalSeoIcon,
  Content: ContentIcon,
  GBP: GbpIcon,
  "Search Ads": SearchAdsIcon,
  Retargeting: RetargetingIcon,
  "A/B Testing": AbTestingIcon,
  "Conversion Tracking": ConversionIcon,
  "Creative Testing": CreativeTestingIcon,
  "Lookalike Audiences": LookalikeIcon,
};

export function ChipRow({ chips }: { chips: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((chip) => {
        const Icon = CHIP_ICONS[chip];
        return (
          <span
            key={chip}
            className="inline-flex items-center gap-1.5 rounded-full border border-border-on-dark bg-white/[0.04] py-1 pl-1.5 pr-2.5 text-[0.68rem] font-medium tracking-wide text-cream-on-dark-soft"
          >
            {Icon ? <Icon className="text-cream-on-dark" /> : null}
            {chip}
          </span>
        );
      })}
    </div>
  );
}
