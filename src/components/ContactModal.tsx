"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT_EMAIL } from "@/lib/config";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setStatus("idle");
    onClose();
  };

  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center px-4 transition-opacity duration-200",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <div
        onClick={reset}
        className="absolute inset-0 bg-night/80 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-md rounded-3xl border border-border-strong bg-white p-7 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.5)] sm:p-8">
        <button
          type="button"
          onClick={reset}
          aria-label="Close contact form"
          className="absolute right-5 top-5 flex size-8 items-center justify-center rounded-full text-ink-faint transition-colors hover:bg-paper-alt hover:text-ink"
        >
          <X className="size-4" />
        </button>

        {status === "sent" ? (
          <div className="py-6 text-center">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-good/10 text-good">
              <CheckCircle2 className="size-6" />
            </span>
            <h3 className="mt-4 font-display text-[1.3rem] font-bold text-ink">
              Message sent
            </h3>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">
              Thanks, {name || "there"} — we&rsquo;ll get back to you at{" "}
              {email || "your email"} shortly.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-6 rounded-full bg-ink px-5 py-2.5 text-[0.88rem] font-semibold text-paper transition-colors hover:bg-signal"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <span className="flex size-11 items-center justify-center rounded-full bg-signal-soft text-signal">
              <Mail className="size-5" />
            </span>
            <h3 className="mt-4 font-display text-[1.4rem] font-bold text-ink">
              Get in touch
            </h3>
            <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-soft">
              Send us a message and we&rsquo;ll reply from {CONTACT_EMAIL}.
            </p>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mt-6 space-y-3"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&rsquo;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-border bg-paper-alt px-4 py-3 text-[0.95rem] text-ink outline-none focus:border-signal"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-border bg-paper-alt px-4 py-3 text-[0.95rem] text-ink outline-none focus:border-signal"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-xl border border-border bg-paper-alt px-4 py-3 text-[0.95rem] text-ink outline-none focus:border-signal"
                />
              </div>

              {status === "error" && (
                <p className="text-[0.85rem] text-bad">
                  Something went wrong sending that — try again, or email us
                  directly at {CONTACT_EMAIL}.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full bg-signal px-6 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(255,77,46,0.65)] transition-colors hover:bg-signal-dim disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
