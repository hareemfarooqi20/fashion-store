import HeroSection from "@/components/sections/HeroSection";
import BrandsMarquee from "@/components/sections/BrandsMarquee";
import FeaturedCollections from "@/components/sections/FeaturedCollections";
import ProductGrid from "@/components/sections/ProductGrid";
import StatsSection from "@/components/sections/StatsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandsMarquee />
      <FeaturedCollections />
      <ProductGrid />
      <StatsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
