import Link from "next/link";
import { Leaf, Recycle, Heart } from "lucide-react";

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
  return (
    <section className="py-24" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <p
          className="text-xs uppercase tracking-[0.35em] font-semibold mb-4 text-center md:text-left"
          style={{ color: "#C5956A" }}
        >
          Our Commitment
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-white leading-tight mb-6">
              Fashion with a Conscience
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed mb-10">
              Luxury and responsibility are not in conflict — they are
              inseparable. We build every collection with the planet, its people,
              and future generations in mind, without ever compromising on the
              craft you deserve.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-display text-3xl md:text-4xl font-semibold mb-1"
                    style={{ color: "#C5956A" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-xs md:text-sm leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/sustainability"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide border-b pb-1 transition-colors duration-200 hover:opacity-80"
              style={{
                color: "#C5956A",
                borderColor: "#C5956A",
              }}
            >
              Our Sustainability Report →
            </Link>
          </div>

          {/* Right column — feature cards */}
          <div className="flex flex-col gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="glass rounded-2xl p-6 flex gap-5 items-start"
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        "color-mix(in srgb, #C5956A, transparent 85%)",
                      border:
                        "1px solid color-mix(in srgb, #C5956A, transparent 70%)",
                    }}
                  >
                    <Icon size={18} style={{ color: "#C5956A" }} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
