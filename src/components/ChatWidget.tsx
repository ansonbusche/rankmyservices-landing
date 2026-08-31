"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND_NAME } from "@/lib/config";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const GREETING: Message = {
  role: "assistant",
  content: `Hi! I'm the ${BRAND_NAME} assistant. Ask me anything about SEO, GEO, AI search visibility, or how this works.`,
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setMessages((cur) => [...cur, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        className={cn(
          "fixed bottom-20 right-5 z-[90] flex size-14 items-center justify-center rounded-full bg-signal text-white shadow-[0_10px_30px_-8px_rgba(255,77,46,0.7)] transition-transform hover:scale-105"
        )}
      >
        {open ? (
          <X className="size-6" />
        ) : (
          <span className="relative flex size-6 items-center justify-center" aria-hidden="true">
            <MessageCircle className="size-6" />
            <span className="absolute text-[8px] font-extrabold leading-none tracking-tight">
              AI
            </span>
          </span>
        )}
        {!open && (
          <span className="absolute inset-0 -z-10 animate-pulse-slow rounded-full bg-signal/50 blur-md" />
        )}
      </button>

      <div
        aria-hidden={!open}
        className={cn(
          "fixed bottom-36 right-5 z-[90] flex w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-night-soft bg-night shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)] transition-all duration-200",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        )}
        style={{ height: "min(32rem, 70vh)" }}
      >
        <div className="flex items-center gap-2.5 border-b border-border-on-dark px-5 py-4">
          <span className="flex size-2 rounded-full bg-good" />
          <p className="text-[0.92rem] font-semibold text-cream-on-dark">
            {BRAND_NAME} Assistant
          </p>
        </div>

        <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
            >
              <p
                className={cn(
                  "max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-[0.88rem] leading-snug",
                  m.role === "user"
                    ? "rounded-tr-sm bg-signal text-white"
                    : "rounded-tl-sm bg-white/[0.06] text-cream-on-dark"
                )}
              >
                {m.content}
              </p>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <span className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-white/[0.06] px-3.5 py-3">
                <span className="size-1.5 animate-bounce rounded-full bg-cream-on-dark-soft [animation-delay:0ms]" />
                <span className="size-1.5 animate-bounce rounded-full bg-cream-on-dark-soft [animation-delay:120ms]" />
                <span className="size-1.5 animate-bounce rounded-full bg-cream-on-dark-soft [animation-delay:240ms]" />
              </span>
            </div>
          )}
          {error && (
            <p className="rounded-xl border border-bad/40 bg-bad/10 px-3.5 py-2.5 text-[0.82rem] text-cream-on-dark">
              {error}
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border-on-dark p-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question…"
            className="w-full rounded-full border border-border-on-dark bg-white/[0.06] px-4 py-2.5 text-[0.88rem] text-cream-on-dark placeholder:text-cream-on-dark-soft/60 outline-none focus:border-signal"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            aria-label="Send message"
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-signal text-white transition-colors hover:bg-signal-dim disabled:opacity-40"
          >
            <Send className="size-4" />
          </button>
        </form>
      </div>
    </>
  );
}
