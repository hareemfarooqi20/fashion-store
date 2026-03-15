import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { COLLECTIONS } from "@/lib/data";

export default function FeaturedCollections() {
  const featured = COLLECTIONS.filter((c) => c.featured);

  return (
    <section className="py-24 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--brand)" }}
            >
              Browse by Category
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Shop Collections
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden sm:flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            style={{ color: "var(--brand)" }}
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((col, i) => (
            <Link
              key={col.id}
              href={`/collections/${col.slug}`}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  i === 0 ? "aspect-[3/4] md:h-full min-h-[400px]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={col.image}
                  alt={col.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/60 text-sm mb-1">
                    {col.productCount} pieces
                  </p>
                  <h3
                    className={`font-display font-bold text-white ${
                      i === 0 ? "text-3xl" : "text-2xl"
                    }`}
                  >
                    {col.name}
                  </h3>
                  <p className="text-white/70 text-sm mt-1 mb-3 line-clamp-2">
                    {col.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3"
                    style={{ color: "var(--brand-light)" }}
                  >
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
