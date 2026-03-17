"use client";

import { useRef, useState } from "react";
import { Check, Mail, Sparkles } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="py-28 relative overflow-hidden" style={{ backgroundColor: "#111" }}>
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as [number, number, number, number] }}
        style={{ background: "radial-gradient(ellipse at 50% 100%, var(--brand) 0%, transparent 65%)" }}
      />

      <div ref={ref} className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mx-auto mb-6"
          style={{
            background: "color-mix(in srgb, var(--brand), transparent 82%)",
            border: "1px solid color-mix(in srgb, var(--brand), transparent 65%)",
          }}
        >
          <Mail className="w-6 h-6" style={{ color: "var(--brand)" }} />
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] font-semibold mb-4"
          style={{ color: "#C5956A" }}
        >
          <Sparkles className="w-3 h-3" />
          Join the Inner Circle
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
          className="font-display text-4xl md:text-5xl font-semibold text-white mb-5"
        >
          Be First.{" "}
          <span className="gradient-text">Always.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.22 }}
          className="text-white/50 text-base md:text-lg leading-relaxed mb-10"
        >
          Get early access to new arrivals, exclusive member events, and styling
          inspiration — straight to your inbox.
        </motion.p>

        {/* Form / Success */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="relative min-h-[64px]"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 items-stretch"
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
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-shrink-0 px-7 py-3 rounded-full font-semibold text-sm tracking-wide text-white transition-all duration-200 disabled:opacity-60 whitespace-nowrap brand-glow-sm"
                  style={{ backgroundColor: "#C5956A" }}
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Subscribing…
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
                className="flex flex-col items-center gap-4 py-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, duration: 0.5, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: "color-mix(in srgb, #C5956A, transparent 80%)",
                    border: "1px solid color-mix(in srgb, #C5956A, transparent 60%)",
                  }}
                >
                  <Check size={24} style={{ color: "#C5956A" }} strokeWidth={2.5} />
                </motion.div>
                <div>
                  <p className="text-white font-semibold text-lg font-display">
                    Welcome to the Inner Circle
                  </p>
                  <p className="text-white/50 text-sm mt-1">
                    You&apos;re all set. Watch your inbox.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Fine print */}
        <AnimatePresence>
          {!submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-5 text-white/25 text-xs"
            >
              No spam. Unsubscribe anytime. Join{" "}
              <span className="text-white/45">12,400+</span> members.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
