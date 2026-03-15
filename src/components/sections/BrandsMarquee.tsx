import { BRANDS } from "@/lib/data";

export default function BrandsMarquee() {
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className="py-16 bg-[#111] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-white/30 text-sm uppercase tracking-widest font-medium">
          Featuring brands including
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track">
          {doubled.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex items-center px-8 md:px-12"
            >
              <span className="text-white/25 text-xl font-display font-bold tracking-wider uppercase hover:text-white/60 transition-colors whitespace-nowrap">
                {brand.name}
              </span>
              <span className="mx-8 text-white/10">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
