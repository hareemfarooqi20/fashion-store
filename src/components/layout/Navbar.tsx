"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, Search, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/lib/data";

const navLinks = [
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "All Products", href: "/shop" },
      { label: "Women", href: "/collections/women" },
      { label: "Men", href: "/collections/men" },
      { label: "Accessories", href: "/collections/accessories" },
      { label: "New Arrivals", href: "/collections/new-arrivals" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const mobileMenuVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] as [number, number, number, number] },
  },
};

const linkVariants = {
  hidden: { x: 30, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1 + i * 0.06,
      duration: 0.45,
      ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
    },
  }),
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transition: { duration: 0.15 },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Announcement bar */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
        className="text-center text-sm py-2.5 px-4 font-medium"
        style={{ background: "var(--brand)" }}
      >
        <span className="text-white">
          Free UK delivery on orders over £100 &nbsp;·&nbsp; Call us:{" "}
          <a href={`tel:${SITE.phone}`} className="underline underline-offset-2 hover:opacity-80 transition-opacity">
            {SITE.phone}
          </a>
        </span>
      </motion.div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-[#0A0A0A]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.span
                className="text-2xl font-display font-bold"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-white">Luxe</span>
                <span className="gradient-text">Boutique</span>
              </motion.span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setShopOpen(true)}
                    onMouseLeave={() => setShopOpen(false)}
                  >
                    <button className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors group">
                      {link.label}
                      <motion.span
                        animate={{ rotate: shopOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {shopOpen && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                        >
                          <div className="glass rounded-xl p-2 w-48 shadow-2xl border border-white/8">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block px-3 py-2.5 text-sm text-white/65 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-150"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="relative text-sm text-white/70 hover:text-white transition-colors group"
                  >
                    {link.label}
                    <span
                      className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                      style={{ background: "var(--brand)" }}
                    />
                  </Link>
                )
              )}
            </nav>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Search"
                className="p-2.5 text-white/50 hover:text-white transition-colors rounded-xl hover:bg-white/5"
              >
                <Search className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Shopping bag"
                className="p-2.5 text-white/50 hover:text-white transition-colors rounded-xl hover:bg-white/5 relative"
              >
                <ShoppingBag className="w-5 h-5" />
                <span
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 text-[10px] font-bold rounded-full flex items-center justify-center text-white"
                  style={{ background: "var(--brand)" }}
                >
                  0
                </span>
              </motion.button>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/booking"
                  className="ml-1 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all btn-press brand-glow-sm"
                  style={{ background: "var(--brand)" }}
                >
                  Book Styling
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-3">
              <button aria-label="Shopping bag" className="p-2 relative">
                <ShoppingBag className="w-5 h-5 text-white" />
                <span
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 text-[10px] font-bold rounded-full flex items-center justify-center text-white"
                  style={{ background: "var(--brand)" }}
                >
                  0
                </span>
              </button>
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                className="p-2 text-white"
              >
                <AnimatePresence mode="wait">
                  {open ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 top-[105px] bg-black/60 backdrop-blur-sm z-30"
                onClick={() => setOpen(false)}
              />

              {/* Panel */}
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed top-[105px] right-0 bottom-0 w-[min(320px,90vw)] bg-[#0D0D0D] border-l border-white/8 z-40 flex flex-col overflow-y-auto"
              >
                <nav className="flex flex-col p-6 gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div key={link.label} custom={i} variants={linkVariants} initial="hidden" animate="visible">
                      <Link
                        href={link.href ?? "#"}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between py-3.5 px-2 text-lg font-semibold text-white/80 hover:text-white border-b border-white/5 transition-colors"
                      >
                        {link.label}
                        {link.children && <ChevronDown className="w-4 h-4 text-white/30" />}
                      </Link>
                      {link.children && (
                        <div className="pl-4 py-1 flex flex-col gap-0.5">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block py-2 px-2 text-sm text-white/45 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-auto p-6 flex flex-col gap-4">
                  <Link
                    href="/booking"
                    onClick={() => setOpen(false)}
                    className="w-full text-center py-4 rounded-full font-semibold text-white text-base brand-glow-sm"
                    style={{ background: "var(--brand)" }}
                  >
                    Book Styling Session
                  </Link>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center justify-center gap-2 text-white/40 text-sm hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {SITE.phone}
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
