"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, Heart, Star, Layers } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = { Calendar, Heart, Star, Layers };

function CountUp({ target, suffix, started }: { target: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 2200;
    const steps = 70;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--brand)" }}
    >
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.6) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-white/70 text-sm font-semibold uppercase tracking-widest">
            Trusted by thousands across the UK
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat, i) => {
            const Icon = iconMap[stat.icon] ?? Star;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.33, 1, 0.68, 1] as [number,number,number,number] }}
                className="text-center relative"
              >
                {/* Vertical divider */}
                {i > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/20 hidden md:block" />
                )}

                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 mb-5 backdrop-blur-sm">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight">
                  <CountUp target={stat.value} suffix={stat.suffix} started={isInView} />
                </p>
                <p className="text-white/80 mt-2 font-medium tracking-wide">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
