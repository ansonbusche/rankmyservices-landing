import { type SVGProps } from "react";

// Simplified, monochrome marks (not the exact trademarked artwork) so the
// AI-platform and social chips read at a glance without licensing real logo
// files. Each is sized off currentColor so it inherits chip text color.

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

export const BRAND_ICONS: Record<string, (props: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  ChatGPT: ChatGPTIcon,
  Claude: ClaudeIcon,
  Perplexity: PerplexityIcon,
  "AI Overviews": GoogleIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
};

export function ChipRow({ chips }: { chips: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((chip) => {
        const Icon = BRAND_ICONS[chip];
        return (
          <span
            key={chip}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white py-1 pl-1.5 pr-2.5 text-[0.68rem] font-medium tracking-wide text-ink-soft"
          >
            {Icon ? <Icon className="text-ink" /> : null}
            {chip}
          </span>
        );
      })}
    </div>
  );
}
