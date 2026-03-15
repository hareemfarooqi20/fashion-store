import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { TEAM, FAQ } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind LuxeBoutique — London's premier fashion boutique in Mayfair. Our story, values, and expert stylists.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero */}
      <section className="py-24 grid-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--brand)" }}
          >
            Our Story
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight">
            Fashion Is Our
            <br />
            <span className="gradient-text">Language</span>
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Founded in 2013 in the heart of Mayfair, LuxeBoutique was born from a simple belief: that truly great style should be accessible, personal, and built to last. Over a decade on, we&apos;ve dressed thousands of clients — from first dates to red carpets — and we&apos;re still as passionate about it as day one.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Curated, Not Cluttered",
                desc: "We stock fewer pieces, chosen with more care. Every item earns its place.",
              },
              {
                title: "Sustainably Minded",
                desc: "Over 70% of our range uses certified sustainable or natural fibres.",
              },
              {
                title: "Personal Always",
                desc: "We treat every customer as an individual — never a transaction.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="glass rounded-2xl p-8">
                <h3
                  className="text-xl font-display font-semibold mb-3"
                  style={{ color: "var(--brand)" }}
                >
                  {title}
                </h3>
                <p className="text-white/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--brand)" }}
            >
              Meet the Team
            </p>
            <h2 className="text-4xl font-display font-bold text-white">
              The Experts Behind the Magic
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.id} className="glass rounded-2xl p-8 text-center">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold text-white font-display mx-auto mb-5"
                  style={{ background: "var(--brand)" }}
                >
                  {member.name[0]}
                </div>
                <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                <p
                  className="text-sm mt-1 mb-4 font-medium"
                  style={{ color: "var(--brand)" }}
                >
                  {member.role}
                </p>
                <p className="text-white/50 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--brand)" }}
            >
              FAQ
            </p>
            <h2 className="text-4xl font-display font-bold text-white">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <details
                key={i}
                className="glass rounded-2xl group"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-medium text-white pr-4">{item.question}</span>
                  <ChevronDown className="w-5 h-5 text-white/40 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-white/60 text-sm leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A0A0A] text-center">
        <h2 className="text-3xl font-display font-bold text-white mb-4">
          Ready to Elevate Your Style?
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/shop"
            className="px-7 py-3.5 rounded-full font-semibold text-white transition-all hover:scale-105"
            style={{ background: "var(--brand)" }}
          >
            Shop Now
          </Link>
          <Link
            href="/booking"
            className="px-7 py-3.5 rounded-full font-semibold text-white glass hover:bg-white/10 transition-all"
          >
            Book a Stylist
          </Link>
        </div>
      </section>
    </div>
  );
}
