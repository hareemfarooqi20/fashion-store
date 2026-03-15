import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingBooking from "@/components/ui/FloatingBooking";

export const metadata: Metadata = {
  metadataBase: new URL("https://luxeboutique.co.uk"),
  title: {
    default: "LuxeBoutique | Dress Your Story — Fashion Boutique London",
    template: "%s | LuxeBoutique",
  },
  description:
    "London's premier fashion boutique — curated womenswear, menswear & accessories. Personal styling, in-house alterations & bridal services in Mayfair.",
  keywords: [
    "fashion boutique London",
    "luxury clothing London",
    "personal stylist London",
    "Mayfair boutique",
    "designer clothing",
    "women's fashion London",
    "men's fashion London",
    "bridal styling",
    "wardrobe edit London",
    "sustainable fashion UK",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://luxeboutique.co.uk",
    siteName: "LuxeBoutique",
    title: "LuxeBoutique | Dress Your Story",
    description:
      "London's premier fashion boutique — curated womenswear, menswear & accessories with personal styling services in Mayfair.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LuxeBoutique — Fashion Boutique London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxeBoutique | Dress Your Story",
    description:
      "London's premier fashion boutique — curated womenswear, menswear & accessories with personal styling services in Mayfair.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "LuxeBoutique",
  description:
    "London's premier fashion boutique offering curated womenswear, menswear, accessories and personal styling services.",
  url: "https://luxeboutique.co.uk",
  telephone: "+44-800-123-4567",
  email: "hello@luxeboutique.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14 King Street, Mayfair",
    addressLocality: "London",
    postalCode: "W1J 9AA",
    addressCountry: "GB",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "12:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "847",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0A0A0A] text-[#F5F5F5]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingBooking />
      </body>
    </html>
  );
}
