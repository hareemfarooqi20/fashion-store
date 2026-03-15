"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, Search, Phone, ChevronDown } from "lucide-react";
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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div
        className="text-center text-sm py-2.5 px-4 font-medium"
        style={{ background: "var(--brand)" }}
      >
        <span className="text-white">
          Free UK delivery on orders over £100 &nbsp;·&nbsp; Call us:{" "}
          <a href={`tel:${SITE.phone}`} className="underline underline-offset-2">
            {SITE.phone}
          </a>
        </span>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5"
            : "bg-[#0A0A0A]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-display font-bold">
                <span className="text-white">Luxe</span>
                <span className="gradient-text">Boutique</span>
              </span>
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
                    <button className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors">
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    {shopOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                        <div className="glass rounded-xl p-3 w-44 shadow-2xl">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                aria-label="Search"
                className="p-2 text-white/60 hover:text-white transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                aria-label="Shopping bag"
                className="p-2 text-white/60 hover:text-white transition-colors relative"
              >
                <ShoppingBag className="w-5 h-5" />
                <span
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 text-[10px] font-bold rounded-full flex items-center justify-center text-white"
                  style={{ background: "var(--brand)" }}
                >
                  0
                </span>
              </button>
              <Link
                href="/booking"
                className="ml-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 btn-press"
                style={{ background: "var(--brand)" }}
              >
                Book Styling
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-3">
              <button aria-label="Shopping bag" className="p-2 relative">
                <ShoppingBag className="w-5 h-5" />
                <span
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 text-[10px] font-bold rounded-full flex items-center justify-center text-white"
                  style={{ background: "var(--brand)" }}
                >
                  0
                </span>
              </button>
              <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                className="p-2"
              >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden fixed inset-0 top-[105px] bg-[#0A0A0A] z-40 px-6 py-8 flex flex-col gap-6 overflow-y-auto">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href ?? "#"}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-xl font-semibold text-white border-b border-white/5"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 mt-2 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm text-white/60 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="mt-4 w-full text-center py-4 rounded-full font-semibold text-white text-lg"
              style={{ background: "var(--brand)" }}
            >
              Book Styling Session
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center justify-center gap-2 text-white/60"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
          </div>
        )}
      </header>
    </>
  );
}
