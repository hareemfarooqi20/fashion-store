"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Sparkles, Star, Truck, RotateCcw, Award } from "lucide-react";

const words = ["Elegance.", "Confidence.", "Style.", "You.", "Stories."];

const trust = [
  { icon: Star, label: "4.9/5 Rating" },
  { icon: Award, label: "12 Yrs of Fashion" },
  { icon: Truck, label: "Free UK Delivery" },
  { icon: RotateCcw, label: "28-Day Returns" },
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setFade(true);
      }, 300);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden grid-bg">
      {/* Background glow */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: "var(--brand)" }}
      />
      <div
        className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full opacity-8 blur-[100px] pointer-events-none"
        style={{ background: "var(--brand)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div>
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: "color-mix(in srgb, var(--brand), transparent 85%)", color: "var(--brand)" }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Spring / Summer 2025 Collection
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight mb-2">
              <span className="text-white">Dress Your</span>
              <br />
              <span
                className="gradient-text transition-opacity duration-300"
                style={{ opacity: fade ? 1 : 0 }}
              >
                {words[wordIndex]}
              </span>
            </h1>

            <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-lg">
              London&apos;s premier fashion boutique — curated womenswear, menswear, and accessories with personal styling services, right in the heart of Mayfair.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-white transition-all hover:scale-105 btn-press brand-glow"
                style={{ background: "var(--brand)" }}
              >
                <ShoppingBag className="w-5 h-5" />
                Shop Collection
              </Link>
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-white glass transition-all hover:bg-white/10 btn-press"
              >
                Book a Stylist
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-10">
              {trust.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-white/50"
                >
                  <Icon className="w-4 h-4" style={{ color: "var(--brand)" }} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — fashion illustration / mosaic */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Background circle */}
              <div
                className="absolute inset-0 rounded-full opacity-20"
                style={{
                  background:
                    "radial-gradient(circle, var(--brand) 0%, transparent 70%)",
                }}
              />

              {/* Main image */}
              <div className="absolute inset-8 rounded-3xl overflow-hidden glass float-animation">
                {/* Placeholder fashion SVG */}
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="400" height="400" fill="#1a1a1a" />
                  {/* Dress silhouette */}
                  <path
                    d="M200 60 C200 60, 175 80, 160 100 L130 160 L110 250 L150 260 L145 320 L200 325 L255 320 L250 260 L290 250 L270 160 L240 100 C225 80, 200 60, 200 60Z"
                    fill="none"
                    stroke="#C5956A"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Decorative lines */}
                  <circle cx="200" cy="55" r="18" fill="none" stroke="#C5956A" strokeWidth="1.5" />
                  <line x1="160" y1="180" x2="240" y2="180" stroke="#C5956A" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="150" y1="210" x2="250" y2="210" stroke="#C5956A" strokeWidth="1" strokeOpacity="0.5" />
                  {/* Sparkles */}
                  <circle cx="80" cy="80" r="2" fill="#C5956A" opacity="0.6" />
                  <circle cx="100" cy="60" r="1.5" fill="#C5956A" opacity="0.4" />
                  <circle cx="320" cy="100" r="2" fill="#C5956A" opacity="0.6" />
                  <circle cx="300" cy="80" r="1.5" fill="#C5956A" opacity="0.4" />
                  <circle cx="340" cy="300" r="2" fill="#C5956A" opacity="0.5" />
                  <circle cx="60" cy="320" r="2" fill="#C5956A" opacity="0.5" />
                  {/* Stars */}
                  <text x="70" y="290" fontSize="14" fill="#C5956A" opacity="0.4">✦</text>
                  <text x="310" y="200" fontSize="10" fill="#C5956A" opacity="0.4">✦</text>
                  <text x="130" y="350" fontSize="8" fill="#C5956A" opacity="0.3">✦</text>
                </svg>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -top-2 -left-4 glass-brand rounded-2xl px-4 py-3 text-sm">
                <p className="font-bold text-white text-lg">8,400+</p>
                <p className="text-white/60 text-xs">Happy Customers</p>
              </div>
              <div className="absolute -bottom-2 -right-4 glass-brand rounded-2xl px-4 py-3 text-sm">
                <p className="font-bold text-white text-lg">★ 4.9</p>
                <p className="text-white/60 text-xs">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
