"use client";

import { useRef } from "react";
import { Leaf, Scissors, Crown, RefreshCcw, ShieldCheck, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";

const reasons = [
  { icon: Crown, title: "Curated by Experts", desc: "Every piece is hand-selected by our stylists for quality, fit, and longevity. No fast fashion — ever." },
  { icon: Leaf, title: "Sustainably Sourced", desc: "Over 70% of our range uses certified sustainable or natural fibres. Fashion that's good for you and the planet." },
  { icon: Scissors, title: "In-House Alterations", desc: "Our master tailor ensures every piece fits you perfectly. Alterations completed within 24-48 hours." },
  { icon: Sparkles, title: "Personal Styling", desc: "Book a one-on-one session with a dedicated stylist who will build a wardrobe around your life and personality." },
  { icon: RefreshCcw, title: "Hassle-Free Returns", desc: "28-day free returns on all full-price items. We make shopping with us completely risk-free." },
  { icon: ShieldCheck, title: "Authenticity Guarantee", desc: "Every brand we carry is fully authenticated. Buy with complete confidence." },
];

export default function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const headInView = useInView(headRef, { once: true, margin: "-60px" });
  return (
    <section className="py-24 bg-[#111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={headRef} initial={{ opacity:0,y:40 }} animate={headInView?{opacity:1,y:0}:{}} transition={{duration:0.8,ease:[0.33,1,0.68,1]}} className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{color:"var(--brand)"}}>Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Fashion, Elevated</h2>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed" style={{color:"rgba(245,245,245,0.5)"}}>We are not just a clothing store. We are your personal style partner here to make you look and feel extraordinary, every single day.</p>
        </motion.div>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{y:40,opacity:0}} animate={isInView?{y:0,opacity:1}:{}} transition={{duration:0.65,delay:i*0.1,ease:[0.33,1,0.68,1]}} whileHover={{y:-4}} className="glass glass-hover rounded-2xl p-7 group cursor-default">
              <motion.div whileHover={{scale:1.12,rotate:5}} transition={{duration:0.3}} className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{background:"color-mix(in srgb, var(--brand), transparent 82%)"}}>
                <Icon className="w-6 h-6" style={{color:"var(--brand)"}} />
              </motion.div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm leading-relaxed" style={{color:"rgba(245,245,245,0.48)"}}>{desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{opacity:0,y:30}} animate={isInView?{opacity:1,y:0}:{}} transition={{delay:0.5,duration:0.8}} className="mt-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 max-w-[120px]" style={{background:"linear-gradient(to right, transparent, var(--brand))"}} />
            <span className="text-[var(--brand)] text-xs">✦</span>
            <div className="h-px flex-1 max-w-[120px]" style={{background:"linear-gradient(to left, transparent, var(--brand))"}} />
          </div>
          <blockquote className="text-2xl md:text-3xl font-display font-medium italic max-w-3xl mx-auto leading-relaxed" style={{color:"rgba(245,245,245,0.72)"}}>&ldquo;Style is a way to say who you are without having to speak.&rdquo;</blockquote>
          <p className="mt-5 text-sm tracking-widest uppercase" style={{color:"rgba(245,245,245,0.32)"}}>— Rachel Zoe</p>
        </motion.div>
      </div>
    </section>
  );
}
