import Link from "next/link";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import type { Product } from "@/types";

function ProductCard({ product }: { product: Product }) {
  const discount = product.salePrice
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;

  return (
    <div className="product-card group">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#1a1a1a] mb-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="product-image object-cover transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge === "sale" && (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-red-500 text-white">
              -{discount}%
            </span>
          )}
          {product.badge === "new" && (
            <span
              className="px-2.5 py-1 rounded-full text-xs font-semibold text-white"
              style={{ background: "var(--brand)" }}
            >
              New
            </span>
          )}
          {product.badge === "bestseller" && (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500 text-white">
              Bestseller
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 w-8 h-8 glass rounded-full flex items-center justify-center text-white/60 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
        >
          <Heart className="w-4 h-4" />
        </button>

        {/* Quick add */}
        <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-colors"
            style={{ background: "var(--brand)" }}
          >
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div>
        <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
          {product.category}
        </p>
        <Link
          href={`/shop/${product.slug}`}
          className="block font-medium text-white hover:text-white/80 transition-colors leading-snug"
        >
          {product.name}
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-1.5 mb-2">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs text-white/50">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          {product.salePrice ? (
            <>
              <span className="font-semibold text-white">
                £{product.salePrice}
              </span>
              <span className="text-white/40 text-sm line-through">
                £{product.price}
              </span>
            </>
          ) : (
            <span className="font-semibold text-white">£{product.price}</span>
          )}
        </div>

        {/* Colors */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {product.colors.slice(0, 3).map((color) => (
            <span
              key={color}
              className="text-xs text-white/40 border border-white/10 px-2 py-0.5 rounded-full"
            >
              {color}
            </span>
          ))}
          {product.colors.length > 3 && (
            <span className="text-xs text-white/40">
              +{product.colors.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  const featured = PRODUCTS.slice(0, 8);

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--brand)" }}
          >
            Handpicked for You
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Featured Pieces
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Each piece is carefully curated by our expert stylists for quality, sustainability, and timeless appeal.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white glass hover:bg-white/8 transition-all btn-press"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
