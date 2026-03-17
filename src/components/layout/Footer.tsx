"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Truck,
  RotateCcw,
  Star,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { SITE } from "@/lib/data";

const trust = [
  { icon: Truck, label: "Free UK Delivery over £100" },
  { icon: RotateCcw, label: "28-Day Free Returns" },
  { icon: ShieldCheck, label: "Secure Checkout" },
  { icon: Star, label: "4.9 / 5 Rating" },
];

const shopLinks = [
  { label: "Women", href: "/collections/women" },
  { label: "Men", href: "/collections/men" },
  { label: "Accessories", href: "/collections/accessories" },
  { label: "New Arrivals", href: "/collections/new-arrivals" },
  { label: "Sale", href: "/shop?filter=sale" },
];

const serviceLinks = [
  { label: "Personal Styling", href: "/services#personal-styling" },
  { label: "Alterations", href: "/services#alterations" },
  { label: "Bridal Styling", href: "/services#bridal" },
  { label: "Wardrobe Edit", href: "/services#wardrobe-edit" },
  { label: "Gift Wrapping", href: "/services#gift-wrapping" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer className="bg-[#0D0D0D] border-t border-white/5">
      {/* Trust bar */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trust.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-3 text-white/55 text-sm group"
              >
                <Icon className="w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110 duration-200" style={{ color: "var(--brand)" }} />
                <span className="group-hover:text-white/75 transition-colors duration-200">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="block mb-4">
              <span className="text-2xl font-display font-bold">
                <span className="text-white">Luxe</span>
                <span className="gradient-text">Boutique</span>
              </span>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              Curated fashion for the modern wardrobe. Timeless pieces, expert styling, and luxury service — all in the heart of Mayfair.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.93 }}
                  className="w-9 h-9 glass rounded-full flex items-center justify-center text-white/40 hover:text-white transition-colors"
                  style={{ transition: "color 0.2s, border-color 0.2s" }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Shop */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/45 hover:text-white transition-colors group flex items-center gap-1.5"
                  >
                    <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-200 text-[var(--brand)]">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.26 }}
          >
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/45 hover:text-white transition-colors group flex items-center gap-1.5"
                  >
                    <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-200 text-[var(--brand)]">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.34 }}
          >
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Visit Us</h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-white/45">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--brand)" }} />
                {SITE.address}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/45">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "var(--brand)" }} />
                <a href={`tel:${SITE.phone}`} className="hover:text-white transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/45">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "var(--brand)" }} />
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/45">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--brand)" }} />
                <div className="space-y-0.5">
                  <p>{SITE.hours.weekday}</p>
                  <p>{SITE.hours.saturday}</p>
                  <p>{SITE.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>© {new Date().getFullYear()} LuxeBoutique Ltd. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white/60 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
