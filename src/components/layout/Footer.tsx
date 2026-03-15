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

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/5">
      {/* Trust bar */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trust.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 text-white/60 text-sm"
              >
                <Icon className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand)" }} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="text-2xl font-display font-bold">
                <span className="text-white">Luxe</span>
                <span className="gradient-text">Boutique</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Curated fashion for the modern wardrobe. Timeless pieces, expert styling, and luxury service — all in the heart of Mayfair.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-9 h-9 glass rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="w-9 h-9 glass rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="w-9 h-9 glass rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2.5">
              {shopLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Visit Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--brand)" }} />
                {SITE.address}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "var(--brand)" }} />
                <a href={`tel:${SITE.phone}`} className="hover:text-white transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "var(--brand)" }} />
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/50">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--brand)" }} />
                <div>
                  <p>{SITE.hours.weekday}</p>
                  <p>{SITE.hours.saturday}</p>
                  <p>{SITE.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} LuxeBoutique Ltd. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
