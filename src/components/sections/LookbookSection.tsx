import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const editorials = [
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    title: "The Minimalist",
    href: "/lookbook/the-minimalist",
    rowSpan: true,
  },
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    title: "Evening Allure",
    href: "/lookbook/evening-allure",
    rowSpan: false,
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    title: "Street Poetry",
    href: "/lookbook/street-poetry",
    rowSpan: false,
  },
  {
    src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80",
    title: "Timeless Ease",
    href: "/lookbook/timeless-ease",
    rowSpan: false,
  },
];

export default function LookbookSection() {
  return (
    <section className="py-24" style={{ backgroundColor: "#111" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <p
            className="text-xs uppercase tracking-[0.35em] font-semibold mb-4"
            style={{ color: "#C5956A" }}
          >
            The Edit
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
            Spring / Summer 2025
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Curated looks that speak to the season. Each piece chosen for its
            effortless elegance and enduring quality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {editorials.map((item) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl${item.rowSpan ? " md:row-span-2" : ""}`}
            >
              {/* Aspect ratio wrapper */}
              <div
                className={`relative w-full overflow-hidden${item.rowSpan ? " aspect-[3/4] md:aspect-auto md:h-full" : " aspect-[3/4]"}`}
                style={item.rowSpan ? { minHeight: "100%" } : undefined}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                  }}
                />

                {/* Always-visible subtle bottom gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 40%, transparent 70%)",
                  }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-white text-xl md:text-2xl font-medium mb-2">
                    {item.title}
                  </h3>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition-all duration-200 group/link"
                    style={{ color: "#C5956A" }}
                  >
                    <span>Shop the Look</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/lookbook"
            className="inline-flex items-center gap-3 text-white border border-white/20 hover:border-[#C5956A] hover:text-[#C5956A] rounded-full px-8 py-3 text-sm font-semibold tracking-wider uppercase transition-all duration-300"
          >
            View Full Lookbook
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
