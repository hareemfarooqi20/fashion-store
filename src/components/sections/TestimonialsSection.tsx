"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, CheckCircle } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-amber-400 text-amber-400" : "text-white/20"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  const current = TESTIMONIALS[active];

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--brand)" }}
          >
            Customer Love
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-white/60 text-sm">
              4.9 average from 847+ reviews
            </span>
          </div>
        </div>

        {/* Featured carousel */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-8 relative">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white font-display"
                style={{ background: "var(--brand)" }}
              >
                {current.name[0]}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <StarRow rating={current.rating} />
              <p className="text-white text-lg md:text-xl leading-relaxed mt-4 mb-6 font-display">
                &ldquo;{current.text}&rdquo;
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div>
                  <p className="text-white font-semibold">{current.name}</p>
                  <p className="text-white/40 text-sm">
                    {current.purchase} · {current.date}
                  </p>
                </div>
                {current.verified && (
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified Purchase
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{
                    background: i === active ? "var(--brand)" : "rgba(255,255,255,0.2)",
                    transform: i === active ? "scale(1.4)" : "scale(1)",
                  }}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous review"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next review"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
                style={{ background: "var(--brand)" }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mini cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <div key={t.id} className="glass rounded-2xl p-5">
              <StarRow rating={t.rating} />
              <p className="text-white/70 text-sm mt-3 mb-4 line-clamp-3">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-white text-sm font-medium">{t.name}</p>
              <p className="text-white/40 text-xs mt-0.5">{t.purchase}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
