import { BRANDS } from "@/lib/data";

export default function BrandsMarquee() {
  const doubled = [...BRANDS, ...BRANDS];
  const reversed = [...BRANDS].reverse();
  const doubledReversed = [...reversed, ...reversed];

  return (
    <section className="py-14 bg-[#111] border-y border-white/5 overflow-hidden relative">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #111, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #111, transparent)" }} />

      {/* Label */}
      <p className="text-white/25 text-xs uppercase tracking-[0.3em] font-medium text-center mb-8">
        Featuring brands including
      </p>

      {/* Forward row */}
      <div className="overflow-hidden mb-4">
        <div className="marquee-track">
          {doubled.map((brand, i) => (
            <div key={`${brand.name}-${i}`} className="flex items-center px-8 md:px-12">
              <span className="text-white/22 text-lg font-display font-bold tracking-wider uppercase hover:text-white/55 transition-colors duration-300 whitespace-nowrap">
                {brand.name}
              </span>
              <span className="mx-8 text-white/10 text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reverse row */}
      <div className="overflow-hidden">
        <div className="marquee-track-reverse">
          {doubledReversed.map((brand, i) => (
            <div key={`rev-${brand.name}-${i}`} className="flex items-center px-8 md:px-12">
              <span
                className="text-base font-display font-semibold tracking-widest uppercase whitespace-nowrap transition-colors duration-300 hover:opacity-70"
                style={{ color: "color-mix(in srgb, var(--brand), transparent 68%)" }}
              >
                {brand.name}
              </span>
              <span className="mx-8 opacity-20" style={{ color: "var(--brand)", fontSize: "8px" }}>◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
