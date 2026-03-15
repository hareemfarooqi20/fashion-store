import Link from "next/link";
import { Calendar, ShoppingBag, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#111]">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, var(--brand) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: "var(--brand)" }}
        >
          Start Your Journey
        </p>
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
          Your Perfect Wardrobe
          <br />
          Starts Here
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
          Whether you&apos;re looking for a one-of-a-kind piece or a complete style overhaul — our expert team is ready to help you look and feel your absolute best.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105 btn-press brand-glow"
            style={{ background: "var(--brand)" }}
          >
            <ShoppingBag className="w-5 h-5" />
            Browse Collection
          </Link>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white glass hover:bg-white/10 transition-all btn-press"
          >
            <Calendar className="w-5 h-5" />
            Book a Stylist
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Footnote */}
        <p className="mt-8 text-white/30 text-sm">
          Styling consultations from £55 · Free UK delivery over £100 · 28-day returns
        </p>
      </div>
    </section>
  );
}
