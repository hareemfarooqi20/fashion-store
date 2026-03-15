import type { Metadata } from "next";
import { Suspense } from "react";
import BookingWizard from "@/components/booking/BookingWizard";

export const metadata: Metadata = {
  title: "Book a Styling Session",
  description:
    "Book a personal styling session, wardrobe edit, bridal styling, or virtual consultation with LuxeBoutique's expert stylists.",
};

function BookingLoader() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="skeleton h-16 rounded-2xl" />
      ))}
    </div>
  );
}

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--brand)" }}
          >
            Expert Styling
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
            Book Your Session
          </h1>
          <p className="mt-4 text-white/50 max-w-lg mx-auto">
            Our stylists are here to help you look and feel extraordinary. Choose a service, pick a time, and let us do the rest.
          </p>
        </div>

        {/* Wizard */}
        <div className="glass rounded-3xl p-6 md:p-10">
          <Suspense fallback={<BookingLoader />}>
            <BookingWizard />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
