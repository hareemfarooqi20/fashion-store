"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { PRODUCTS } from "@/lib/data";
import type { Product } from "@/types";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.96 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: [0.33, 1, 0.68, 1] as [number,number,number,number] },
  },
};

function ProductCard({ product }: { product: Product }) {
  const discount = product.salePrice
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;

  return (
    <div className="product-card group">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#181818] mb-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="product-image object-cover transition-transform duration-600"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Hover shimmer */}
        <div
          className="product-overlay absolute inset-0"
          style={{
            background: "linear-gradient(135deg, color-mix(in srgb, var(--brand), transparent 85%) 0%, transparent 50%)",
          }}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge === "sale" && (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-600 text-white shadow">
              -{discount}%
            </span>
          )}
          {product.badge === "new" && (
            <span
              className="px-2.5 py-1 rounded-full text-xs font-semibold text-white shadow"
              style={{ background: "var(--brand)" }}
            >
              New
            </span>
          )}
          {product.badge === "bestseller" && (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500 text-white shadow">
              Bestseller
            </span>
          )}
        </div>

        {/* Wishlist */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 w-9 h-9 glass-dark rounded-full flex items-center justify-center text-white/60 hover:text-rose-400 transition-colors opacity-0 group-hover:opacity-100"
        >
          <Heart className="w-4 h-4" />
        </motion.button>

        {/* Quick add */}
        <div className="absolute bottom-3 inset-x-3 product-overlay">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-2.5 rounded-xl text-sm font-semibold text-white shadow-luxury"
            style={{ background: "var(--brand)" }}
          >
            Quick Add
          </motion.button>
        </div>
      </div>

      {/* Info */}
      <div>
        <p className="text-white/35 text-[10px] uppercase tracking-widest mb-1.5">
          {product.category}
        </p>
        <Link
          href={`/shop/${product.slug}`}
          className="block font-medium text-white/90 hover:text-white transition-colors leading-snug text-sm"
        >
          {product.name}
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-1.5 mb-2">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs text-white/45">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          {product.salePrice ? (
            <>
              <span className="font-semibold text-white">£{product.salePrice}</span>
              <span className="text-white/35 text-sm line-through">£{product.price}</span>
            </>
          ) : (
            <span className="font-semibold text-white">£{product.price}</span>
          )}
        </div>

        {/* Color dots */}
        <div className="flex gap-1.5 mt-2.5">
          {product.colors.slice(0, 4).map((color) => (
            <span
              key={color}
              title={color}
              className="w-4 h-4 rounded-full border border-white/15 cursor-pointer hover:scale-125 transition-transform"
              style={{
                background: color.toLowerCase().includes("black")
                  ? "#1a1a1a"
                  : color.toLowerCase().includes("ivory") || color.toLowerCase().includes("white") || color.toLowerCase().includes("chalk") || color.toLowerCase().includes("ecru")
                  ? "#F5F0E8"
                  : color.toLowerCase().includes("camel") || color.toLowerCase().includes("tan") || color.toLowerCase().includes("caramel") || color.toLowerCase().includes("sand")
                  ? "#C5956A"
                  : color.toLowerCase().includes("blush") || color.toLowerCase().includes("pink") || color.toLowerCase().includes("rose")
                  ? "#E8B4B8"
                  : color.toLowerCase().includes("navy") || color.toLowerCase().includes("blue")
                  ? "#1B3A5C"
                  : color.toLowerCase().includes("grey") || color.toLowerCase().includes("slate") || color.toLowerCase().includes("charcoal")
                  ? "#6B7280"
                  : color.toLowerCase().includes("green") || color.toLowerCase().includes("forest")
                  ? "#2D6A4F"
                  : color.toLowerCase().includes("burgundy")
                  ? "#6B1E2E"
                  : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-white/35 flex items-center">+{product.colors.length - 4}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  const featured = PRODUCTS.slice(0, 8);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as [number,number,number,number] }}
          ref={ref}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--brand)" }}
          >
            Handpicked for You
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Featured Pieces
          </h2>
          <p className="mt-4 max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(245,245,245,0.5)" }}>
            Each piece is carefully curated by our expert stylists for quality,
            sustainability, and timeless appeal.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7"
        >
          {featured.map((product) => (
            <motion.div key={product.id} variants={cardVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-center mt-14"
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white glass glass-hover transition-all hover:scale-[1.02] btn-press group"
          >
            View All Products
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
