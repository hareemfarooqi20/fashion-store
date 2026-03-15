"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    // Simulate async call
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="py-24" style={{ backgroundColor: "#111" }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <p
          className="text-xs uppercase tracking-[0.35em] font-semibold mb-4"
          style={{ color: "#C5956A" }}
        >
          Join the Inner Circle
        </p>

        <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-5">
          Be First. Always.
        </h2>

        <p className="text-white/50 text-base md:text-lg leading-relaxed mb-10">
          Get early access to new arrivals, exclusive member events, and styling
          inspiration — straight to your inbox.
        </p>

        {/* Form / Success state */}
        <div className="relative min-h-[60px]">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 items-stretch"
              style={{
                opacity: 1,
                transform: "scale(1)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="form-input flex-1 min-w-0"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="flex-shrink-0 px-7 py-3 rounded-full font-semibold text-sm tracking-wide text-white transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-60 whitespace-nowrap"
                style={{ backgroundColor: "#C5956A" }}
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Subscribing…
                  </span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          ) : (
            <div
              className="flex flex-col items-center gap-4 py-4"
              style={{
                animation: "successIn 0.4s cubic-bezier(0.22,1,0.36,1) forwards",
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: "color-mix(in srgb, #C5956A, transparent 80%)",
                  border: "1px solid color-mix(in srgb, #C5956A, transparent 60%)",
                }}
              >
                <Check size={24} style={{ color: "#C5956A" }} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-white font-semibold text-lg font-display">
                  Welcome to the Inner Circle
                </p>
                <p className="text-white/50 text-sm mt-1">
                  You&apos;re all set. Watch your inbox.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Fine print */}
        {!submitted && (
          <p className="mt-5 text-white/30 text-xs">
            No spam. Unsubscribe anytime. Join 12,400+ members.
          </p>
        )}
      </div>

      <style jsx>{`
        @keyframes successIn {
          from {
            opacity: 0;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
