import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star, SlidersHorizontal } from "lucide-react";
import { PRODUCTS, COLLECTIONS } from "@/lib/data";
import type { Product } from "@/types";

export const metadata: Metadata = {
  title: "Shop All",
  description:
    "Browse the full LuxeBoutique collection — womenswear, menswear, and accessories, curated by our expert stylists.",
};

function ProductCard({ product }: { product: Product }) {
  const discount = product.salePrice
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;

  return (
    <div className="product-card group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#1a1a1a] mb-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="product-image object-cover transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
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
        <button
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 w-8 h-8 glass rounded-full flex items-center justify-center text-white/60 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
        >
          <Heart className="w-4 h-4" />
        </button>
        <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="w-full py-2.5 rounded-xl text-sm font-semibold text-white"
            style={{ background: "var(--brand)" }}
          >
            Quick Add
          </button>
        </div>
      </div>
      <div>
        <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{product.category}</p>
        <Link
          href={`/shop/${product.slug}`}
          className="block font-medium text-white hover:text-white/80 transition-colors leading-snug"
        >
          {product.name}
        </Link>
        <div className="flex items-center gap-1.5 mt-1.5 mb-2">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs text-white/50">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <div className="flex items-center gap-2">
          {product.salePrice ? (
            <>
              <span className="font-semibold text-white">£{product.salePrice}</span>
              <span className="text-white/40 text-sm line-through">£{product.price}</span>
            </>
          ) : (
            <span className="font-semibold text-white">£{product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--brand)" }}
          >
            LuxeBoutique
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
            All Products
          </h1>
          <p className="text-white/50 mt-2">{PRODUCTS.length} pieces</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="glass rounded-2xl p-5 sticky top-24">
              <div className="flex items-center gap-2 text-white font-semibold mb-5">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </div>

              {/* Category */}
              <div className="mb-6">
                <p className="text-white/50 text-xs uppercase tracking-widest mb-3">
                  Category
                </p>
                <div className="space-y-2">
                  {["All", ...COLLECTIONS.map((c) => c.name)].map((cat) => (
                    <button
                      key={cat}
                      className="block w-full text-left text-sm text-white/60 hover:text-white transition-colors py-1"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-white/50 text-xs uppercase tracking-widest mb-3">
                  Price Range
                </p>
                <div className="space-y-2">
                  {["Under £100", "£100 – £200", "£200 – £300", "£300+"].map(
                    (p) => (
                      <button
                        key={p}
                        className="block w-full text-left text-sm text-white/60 hover:text-white transition-colors py-1"
                      >
                        {p}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Badge */}
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-3">
                  Filter By
                </p>
                <div className="space-y-2">
                  {["New Arrivals", "On Sale", "Bestsellers", "In Stock"].map(
                    (b) => (
                      <label
                        key={b}
                        className="flex items-center gap-2 text-sm text-white/60 hover:text-white cursor-pointer"
                      >
                        <input type="checkbox" className="rounded" />
                        {b}
                      </label>
                    )
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
