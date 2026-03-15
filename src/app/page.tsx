import HeroSection from "@/components/sections/HeroSection";
import PromoCountdown from "@/components/sections/PromoCountdown";
import BrandsMarquee from "@/components/sections/BrandsMarquee";
import FeaturedCollections from "@/components/sections/FeaturedCollections";
import ProductGrid from "@/components/sections/ProductGrid";
import LookbookSection from "@/components/sections/LookbookSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import SustainabilitySection from "@/components/sections/SustainabilitySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <PromoCountdown />
      <HeroSection />
      <BrandsMarquee />
      <FeaturedCollections />
      <ProductGrid />
      <LookbookSection />
      <StatsSection />
      <WhyUsSection />
      <SustainabilitySection />
      <TestimonialsSection />
      <NewsletterSection />
      <CTASection />
    </>
  );
}
