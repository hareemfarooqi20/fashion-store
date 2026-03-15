"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { COLLECTIONS } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.97 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] as [number,number,number,number] },
  },
};

const headingVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as [number,number,number,number] } },
};

export default function FeaturedCollections() {
  const featured = COLLECTIONS.filter((c) => c.featured);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-end justify-between mb-12"
        >
          <motion.div variants={headingVariants}>
            <motion.p
              variants={headingVariants}
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--brand)" }}
            >
              Browse by Category
            </motion.p>
            <motion.h2
              variants={headingVariants}
              className="text-4xl md:text-5xl font-display font-bold text-white"
            >
              Shop Collections
            </motion.h2>
          </motion.div>
          <motion.div variants={headingVariants}>
            <Link
              href="/shop"
              className="hidden sm:flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all group"
              style={{ color: "var(--brand)" }}
            >
              View All{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {featured.map((col, i) => (
            <motion.div
              key={col.id}
              variants={cardVariants}
              className={i === 0 ? "md:row-span-2" : ""}
            >
              <Link
                href={`/collections/${col.slug}`}
                className="group relative overflow-hidden rounded-2xl block h-full"
              >
                <div
                  className={`relative overflow-hidden ${
                    i === 0 ? "aspect-[3/4] md:h-full min-h-[420px]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={col.image}
                    alt={col.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent transition-opacity duration-300" />

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, color-mix(in srgb, var(--brand), transparent 80%) 0%, transparent 60%)",
                    }}
                  />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-7 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white/55 text-sm mb-1.5">
                      {col.productCount} pieces
                    </p>
                    <h3
                      className={`font-display font-bold text-white ${
                        i === 0 ? "text-4xl" : "text-2xl"
                      }`}
                    >
                      {col.name}
                    </h3>
                    <p className="text-white/65 text-sm mt-2 mb-4 line-clamp-2 leading-relaxed">
                      {col.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3"
                      style={{ color: "var(--brand-light)" }}
                    >
                      Explore Collection{" "}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
