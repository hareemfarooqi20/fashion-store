import Link from "next/link";
import {
  Sparkles,
  Scissors,
  Heart,
  Layers,
  Gift,
  Monitor,
  CheckCircle,
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Scissors,
  Heart,
  Layers,
  Gift,
  Monitor,
};

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--brand)" }}
          >
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Style, Tailored to You
          </h2>
          <p className="mt-4 text-white/50 max-w-2xl mx-auto">
            From a one-on-one styling session to expert alterations and bridal services — we offer everything to make you look extraordinary.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] ?? Sparkles;
            return (
              <div
                key={service.id}
                className={`glass rounded-2xl p-7 relative group hover:border-white/15 transition-colors ${
                  service.popular ? "border-[var(--brand)]/30" : ""
                }`}
              >
                {service.popular && (
                  <span
                    className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: "var(--brand)" }}
                  >
                    Most Popular
                  </span>
                )}

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: "color-mix(in srgb, var(--brand), transparent 82%)" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "var(--brand)" }} />
                </div>

                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-semibold text-lg leading-snug">
                    {service.title}
                  </h3>
                </div>

                <p className="text-white/50 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Price + duration */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-sm font-bold"
                    style={{ color: "var(--brand)" }}
                  >
                    {service.price}
                  </span>
                  <span className="text-white/30 text-xs">·</span>
                  <span className="text-white/40 text-xs">{service.duration}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "var(--brand)" }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/booking?service=${service.id}`}
                  className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02] btn-press"
                  style={{ background: "var(--brand)" }}
                >
                  Book This Service
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
