"use client";
import HeroSection from "@/components/custom/landing/HeroSection";
import ServiceCards from "@/components/shared/ServiceCard";
import PricingPage  from "@/components/custom/poolarea/pricing-page";
import WellnessCTA  from "@/components/custom/poolarea/wellness-cta";
import { heroSectionSlides } from "@/lib/poolarea/english";
import { useLanguageContext } from "@/contexts/LanguageContext";
import { getLocalizedContent } from "@/lib/poolarea";
export default function PoolArea() {
  const {lang} = useLanguageContext();
  const {services, pricings} = getLocalizedContent(lang, "saltcave")
  return (
    <>
      <HeroSection slides={heroSectionSlides} />
      <ServiceCards services={services} />
      <PricingPage pricings={pricings}/>
      <WellnessCTA/>
    </>
  );
}
