import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Personal styling, in-house alterations, bridal styling, wardrobe edits and more — expert fashion services at LuxeBoutique, Mayfair.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#0A0A0A] pt-16 pb-4 text-center">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--brand)" }}
        >
          Expert Services
        </p>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white px-4">
          Style, Tailored to You
        </h1>
        <p className="mt-4 text-white/50 max-w-2xl mx-auto px-4">
          From one-on-one styling sessions to master alterations and luxurious bridal packages — everything you need to look and feel exceptional.
        </p>
      </div>
      <ServicesSection />
      <CTASection />
    </div>
  );
}
