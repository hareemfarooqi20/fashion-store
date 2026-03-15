"use client";

import { useRef } from "react";
import Link from "next/link";
import { Calendar, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 relative overflow-hidden bg-[#111]">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as [number,number,number,number] }}
        style={{ background: "radial-gradient(ellipse at 50% 50%, var(--brand) 0%, transparent 65%)" }}
      />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div ref={ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p initial={{opacity:0,y:20}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="text-xs font-semibold uppercase tracking-widest mb-4" style={{color:"var(--brand)"}}>
          Start Your Journey
        </motion.p>
        <motion.h2 initial={{opacity:0,y:30}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:0.7,delay:0.1}} className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
          Your Perfect
          <br />
          <span className="gradient-text">Wardrobe</span> Starts Here
        </motion.h2>
        <motion.p initial={{opacity:0,y:20}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.2}} className="text-lg max-w-2xl mx-auto mb-12" style={{color:"rgba(245,245,245,0.55)"}}>
          Whether you are looking for a one-of-a-kind piece or a complete style overhaul, our expert team is ready to help you look and feel your absolute best.
        </motion.p>
        <motion.div initial={{opacity:0,y:20}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.3}} className="flex flex-wrap items-center justify-center gap-4">
          <motion.div whileHover={{scale:1.05}} whileTap={{scale:0.97}}>
            <Link href="/shop" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white brand-glow btn-press" style={{background:"var(--brand)"}}>
              <ShoppingBag className="w-5 h-5"/>Browse Collection
            </Link>
          </motion.div>
          <motion.div whileHover={{scale:1.05}} whileTap={{scale:0.97}}>
            <Link href="/booking" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white glass glass-hover btn-press group">
              <Calendar className="w-5 h-5"/>Book a Stylist<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
            </Link>
          </motion.div>
        </motion.div>
        <motion.p initial={{opacity:0}} animate={isInView?{opacity:1}:{}} transition={{delay:0.6,duration:0.6}} className="mt-10 text-sm" style={{color:"rgba(245,245,245,0.28)"}}>
          Styling consultations from 55 pounds · Free UK delivery over 100 pounds · 28-day returns
        </motion.p>
      </div>
    </section>
  );
}
