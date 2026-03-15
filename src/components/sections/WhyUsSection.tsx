import { Leaf, Scissors, Crown, RefreshCcw, ShieldCheck, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Crown,
    title: "Curated by Experts",
    desc: "Every piece in our store is hand-selected by our stylists for quality, fit, and longevity. No fast fashion — ever.",
  },
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    desc: "Over 70% of our range uses certified sustainable or natural fibres. Fashion that's good for you and the planet.",
  },
  {
    icon: Scissors,
    title: "In-House Alterations",
    desc: "Our master tailor ensures every piece fits you perfectly. Alterations completed within 24–48 hours.",
  },
  {
    icon: Sparkles,
    title: "Personal Styling",
    desc: "Book a one-on-one session with a dedicated stylist who will build a wardrobe around your life and personality.",
  },
  {
    icon: RefreshCcw,
    title: "Hassle-Free Returns",
    desc: "28-day free returns on all full-price items. We make shopping with us completely risk-free.",
  },
  {
    icon: ShieldCheck,
    title: "Authenticity Guarantee",
    desc: "Every brand we carry is fully authenticated. Buy with complete confidence — no replicas, no compromise.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--brand)" }}
          >
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Fashion, Elevated
          </h2>
          <p className="mt-4 text-white/50 max-w-2xl mx-auto">
            We&apos;re not just a clothing store. We&apos;re your personal style partner — here to make you look and feel extraordinary, every single day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass rounded-2xl p-7 group hover:border-white/15 transition-colors"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                style={{ background: "color-mix(in srgb, var(--brand), transparent 82%)" }}
              >
                <Icon className="w-6 h-6" style={{ color: "var(--brand)" }} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-display font-medium text-white/80 italic max-w-3xl mx-auto">
            &ldquo;Style is a way to say who you are without having to speak.&rdquo;
          </blockquote>
          <p className="mt-4 text-white/40 text-sm">— Rachel Zoe</p>
        </div>
      </div>
    </section>
  );
}
