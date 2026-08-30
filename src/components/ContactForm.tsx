"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/config";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-page", name, email, message }),
      });
      if (!res.ok) throw new Error("Form submission failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="rounded-3xl border border-border-strong bg-white p-7 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.5)] sm:p-8">
      {status === "sent" ? (
        <div className="py-6 text-center">
          <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-good/10 text-good">
            <CheckCircle2 className="size-6" />
          </span>
          <h2 className="mt-4 font-display text-[1.3rem] font-bold text-ink">
            Message sent
          </h2>
          <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">
            Thanks, {name || "there"} &mdash; we&rsquo;ll get back to you at{" "}
            {email || "your email"} shortly.
          </p>
        </div>
      ) : (
        <form
          name="contact-page"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          <input type="hidden" name="form-name" value="contact-page" />
          <p className="hidden">
            <label>
              Don&rsquo;t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label htmlFor="contact-page-name" className="sr-only">
              Name
            </label>
            <input
              id="contact-page-name"
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
            <label htmlFor="contact-page-email" className="sr-only">
              Email
            </label>
            <input
              id="contact-page-email"
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
            <label htmlFor="contact-page-message" className="sr-only">
              Message
            </label>
            <textarea
              id="contact-page-message"
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
              Something went wrong sending that &mdash; try again, or email
              us directly at {CONTACT_EMAIL}.
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
      )}
    </div>
  );
}
