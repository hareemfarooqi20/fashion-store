import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { PRODUCTS, COLLECTIONS } from "@/lib/data";
import type { Product } from "@/types";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const col = COLLECTIONS.find((c) => c.slug === category);
  return {
    title: col ? col.name : "Collection",
    description: col?.description ?? "Browse our curated fashion collection.",
  };
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#1a1a1a] mb-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="product-image object-cover transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        <button
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 w-8 h-8 glass rounded-full flex items-center justify-center text-white/60 hover:text-red-400 transition-colors"
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
      <Link
        href={`/shop/${product.slug}`}
        className="block font-medium text-white hover:text-white/80 transition-colors"
      >
        {product.name}
      </Link>
      <div className="flex items-center gap-1.5 mt-1 mb-1.5">
        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        <span className="text-xs text-white/50">{product.rating}</span>
      </div>
      <span className="font-semibold text-white">
        £{product.salePrice ?? product.price}
      </span>
    </div>
  );
}

export default async function CollectionPage({ params }: Props) {
  const { category } = await params;
  const collection = COLLECTIONS.find((c) => c.slug === category);
  const products = PRODUCTS.filter(
    (p) =>
      p.category === category ||
      (category === "new-arrivals" && p.badge === "new")
  );

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white/50">Collection not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] pb-24">
      {/* Hero banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white">
            {collection.name}
          </h1>
          <p className="text-white/70 mt-3 max-w-xl">{collection.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-white/50 text-sm">
            {products.length > 0 ? `${products.length} pieces` : "Coming soon"}
          </p>
          <div className="flex gap-2">
            {COLLECTIONS.map((c) => (
              <Link
                key={c.id}
                href={`/collections/${c.slug}`}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  c.slug === category
                    ? "text-white"
                    : "glass text-white/50 hover:text-white"
                }`}
                style={
                  c.slug === category ? { background: "var(--brand)" } : {}
                }
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-white/40 text-lg mb-4">New pieces dropping soon</p>
            <Link
              href="/shop"
              className="inline-block px-6 py-3 rounded-full text-sm font-medium text-white"
              style={{ background: "var(--brand)" }}
            >
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
