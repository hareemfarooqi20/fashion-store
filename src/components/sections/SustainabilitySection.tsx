"use client";

import { useRef } from "react";
import Link from "next/link";
import { Leaf, Recycle, Heart, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "70%+", label: "Sustainable fibres" },
  { value: "2026", label: "Carbon neutral target" },
  { value: "Zero", label: "Single-use packaging" },
];

const features = [
  {
    icon: Leaf,
    title: "Ethically Sourced",
    description:
      "Every material is traced from origin to garment. We partner only with certified suppliers who share our commitment to fair wages and safe conditions.",
  },
  {
    icon: Recycle,
    title: "Circular Fashion",
    description:
      "Our take-back programme gives your pre-loved pieces a second life. Returned garments are repaired, resold, or responsibly recycled.",
  },
  {
    icon: Heart,
    title: "Giving Back",
    description:
      "1% of every sale supports textile-worker welfare programmes and reforestation initiatives across our supply chain communities.",
  },
];

export default function SustainabilitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#0A0A0A" }}>
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(197,149,106,0.05) 0%, transparent 70%)" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.35em] font-semibold mb-4 text-center md:text-left"
          style={{ color: "#C5956A" }}
        >
          Our Commitment
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
              className="font-display text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-white leading-tight mb-6"
            >
              Fashion with a{" "}
              <span className="gradient-text-warm">Conscience</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/50 text-base md:text-lg leading-relaxed mb-10"
            >
              Luxury and responsibility are not in conflict — they are
              inseparable. We build every collection with the planet, its people,
              and future generations in mind, without ever compromising on the
              craft you deserve.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                >
                  <p
                    className="font-display text-3xl md:text-4xl font-semibold mb-1"
                    style={{ color: "#C5956A" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-xs md:text-sm leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/sustainability"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition-all duration-200 group hover:gap-3"
                style={{ color: "#C5956A" }}
              >
                Our Sustainability Report
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right column — feature cards */}
          <div className="flex flex-col gap-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.65,
                    delay: 0.2 + i * 0.12,
                    ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
                  }}
                  whileHover={{ x: 4 }}
                  className="glass glass-hover rounded-2xl p-6 flex gap-5 items-start transition-colors cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: "color-mix(in srgb, #C5956A, transparent 83%)",
                      border: "1px solid color-mix(in srgb, #C5956A, transparent 68%)",
                    }}
                  >
                    <Icon size={18} style={{ color: "#C5956A" }} />
                  </motion.div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
