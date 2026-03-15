"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingBag, Sparkles, Star, Truck, RotateCcw, Award, ArrowRight } from "lucide-react";

const words = ["Elegance.", "Confidence.", "Style.", "Stories.", "You."];

const trust = [
  { icon: Star, label: "4.9/5 Rating" },
  { icon: Award, label: "12 Yrs of Fashion" },
  { icon: Truck, label: "Free UK Delivery" },
  { icon: RotateCcw, label: "28-Day Returns" },
];

// Animation variants
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const wordReveal = {
  hidden: { y: 80, opacity: 0, rotateX: -15 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.85, ease: [0.33, 1, 0.68, 1] as [number,number,number,number] },
  },
};

const fadeSlideUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] as [number,number,number,number] },
  },
};

const trustStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 1 } },
};

const trustItem = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] },
  },
};

const rightColVariants = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1] as [number,number,number,number], delay: 0.5 },
  },
};

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] flex items-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 grid-bg"
        style={{ y: bgY }}
      />

      {/* Ambient glow orbs */}
      <motion.div
        className="absolute -top-48 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(197,149,106,0.12) 0%, transparent 70%)",
          y: bgY,
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as [number,number,number,number] }}
      />
      <motion.div
        className="absolute -bottom-48 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(197,149,106,0.08) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as [number,number,number,number], delay: 2 }}
      />

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full"
        style={{ y: textY, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* ── Left Column ── */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-7"
              style={{
                background: "color-mix(in srgb, var(--brand), transparent 85%)",
                color: "var(--brand)",
                border: "1px solid color-mix(in srgb, var(--brand), transparent 70%)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Spring / Summer 2025 Collection
            </motion.div>

            {/* Headline — staggered word reveal */}
            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              className="overflow-hidden"
            >
              <div className="overflow-hidden mb-1">
                <motion.span
                  variants={wordReveal}
                  className="block text-[clamp(3rem,7vw,5.5rem)] font-display font-bold leading-[1.05] text-white"
                >
                  Dress Your
                </motion.span>
              </div>

              {/* Animated cycling word */}
              <div className="overflow-hidden h-[1.1em] relative">
                <AnimatedWords words={words} />
              </div>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeSlideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.7 }}
              className="mt-6 text-lg text-white/58 leading-relaxed max-w-[480px]"
              style={{ color: "rgba(245,245,245,0.58)" }}
            >
              London&apos;s premier fashion boutique — curated womenswear, menswear,
              and accessories with personal styling in the heart of Mayfair.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeSlideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.85 }}
              className="flex flex-wrap gap-4 mt-9"
            >
              <Link
                href="/shop"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-semibold text-white transition-all hover:scale-105 btn-press brand-glow"
                style={{ background: "var(--brand)" }}
              >
                <ShoppingBag className="w-5 h-5" />
                Shop Collection
              </Link>
              <Link
                href="/booking"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-semibold text-white glass glass-hover transition-all hover:scale-[1.02] btn-press group"
              >
                Book a Stylist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={trustStagger}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-x-6 gap-y-3 mt-11"
            >
              {trust.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  variants={trustItem}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "rgba(245,245,245,0.5)" }}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "var(--brand)" }} />
                  {label}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right Column ── */}
          <motion.div
            variants={rightColVariants}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "1px dashed color-mix(in srgb, var(--brand), transparent 70%)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Glow background */}
              <div
                className="absolute inset-10 rounded-full opacity-25 blur-2xl"
                style={{ background: "var(--brand)" }}
              />

              {/* Main illustration card */}
              <motion.div
                className="absolute inset-10 rounded-3xl glass overflow-hidden shadow-luxury"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as [number,number,number,number] }}
              >
                <svg
                  viewBox="0 0 400 440"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="400" height="440" fill="#141414" />
                  {/* Dress silhouette */}
                  <path
                    d="M200 55 C200 55, 172 78, 157 102 L124 168 L104 262 L148 272 L142 338 L200 344 L258 338 L252 272 L296 262 L276 168 L243 102 C228 78, 200 55, 200 55Z"
                    fill="none"
                    stroke="#C5956A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Neck */}
                  <circle cx="200" cy="50" r="16" fill="none" stroke="#C5956A" strokeWidth="1.2" />
                  {/* Waist line */}
                  <line x1="152" y1="192" x2="248" y2="192" stroke="#C5956A" strokeWidth="0.8" strokeOpacity="0.5" strokeDasharray="4 4" />
                  {/* Hem detail */}
                  <path d="M142 338 Q200 350 258 338" fill="none" stroke="#C5956A" strokeWidth="1" strokeOpacity="0.7" />
                  {/* Decorative collar */}
                  <path d="M180 68 Q200 82 220 68" fill="none" stroke="#C5956A" strokeWidth="1" strokeOpacity="0.8" />
                  {/* Ambient sparkles */}
                  <circle cx="72" cy="95" r="2" fill="#C5956A" opacity="0.5" />
                  <circle cx="88" cy="72" r="1.2" fill="#C5956A" opacity="0.35" />
                  <circle cx="60" cy="112" r="1.5" fill="#E8BF9A" opacity="0.4" />
                  <circle cx="328" cy="108" r="2" fill="#C5956A" opacity="0.5" />
                  <circle cx="312" cy="88" r="1.2" fill="#C5956A" opacity="0.35" />
                  <circle cx="340" cy="130" r="1.5" fill="#E8BF9A" opacity="0.4" />
                  <circle cx="340" cy="320" r="1.8" fill="#C5956A" opacity="0.4" />
                  <circle cx="60" cy="310" r="1.8" fill="#C5956A" opacity="0.4" />
                  {/* Star accents */}
                  <text x="62" y="280" fontSize="10" fill="#C5956A" opacity="0.35" fontFamily="serif">✦</text>
                  <text x="322" y="200" fontSize="8" fill="#C5956A" opacity="0.35" fontFamily="serif">✦</text>
                  <text x="122" y="370" fontSize="7" fill="#C5956A" opacity="0.3" fontFamily="serif">✦</text>
                  <text x="260" y="58" fontSize="9" fill="#E8BF9A" opacity="0.3" fontFamily="serif">✦</text>
                </svg>
              </motion.div>

              {/* Floating stat cards */}
              <motion.div
                className="absolute -top-3 -left-6 glass-brand rounded-2xl px-5 py-3 shadow-luxury"
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2, duration: 0.7, ease: [0.33, 1, 0.68, 1] as [number,number,number,number] }}
              >
                <p className="font-display font-bold text-white text-2xl">8,400+</p>
                <p className="text-white/55 text-xs mt-0.5">Happy Customers</p>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -right-6 glass-brand rounded-2xl px-5 py-3 shadow-luxury"
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.4, duration: 0.7, ease: [0.33, 1, 0.68, 1] as [number,number,number,number] }}
              >
                <p className="font-display font-bold text-white text-2xl">★ 4.9</p>
                <p className="text-white/55 text-xs mt-0.5">Average Rating</p>
              </motion.div>

              {/* Dot decorations on ring */}
              {[0, 90, 180, 270].map((angle, i) => (
                <motion.div
                  key={angle}
                  className="absolute w-2.5 h-2.5 rounded-full"
                  style={{
                    background: "var(--brand)",
                    top: `${50 - 50 * Math.cos((angle * Math.PI) / 180)}%`,
                    left: `${50 + 50 * Math.sin((angle * Math.PI) / 180)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none" />
    </section>
  );
}

/* ── Animated cycling words ── */
function AnimatedWords({ words }: { words: string[] }) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2500);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <motion.span
      key={index}
      initial={{ y: 80, opacity: 0, rotateX: -15 }}
      animate={{ y: 0, opacity: 1, rotateX: 0 }}
      exit={{ y: -80, opacity: 0, rotateX: 15 }}
      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] as [number,number,number,number] }}
      className="block text-[clamp(3rem,7vw,5.5rem)] font-display font-bold leading-[1.05] gradient-text"
    >
      {words[index]}
    </motion.span>
  );
}

import React from "react";
