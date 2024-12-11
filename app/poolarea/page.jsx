"use client";
import HeroSection from "@/components/custom/landing/HeroSection";
import ServiceCards from "@/components/shared/ServiceCard";
import Pricing from "@/components/shared/Pricing";
import WellnessCTA  from "@/components/custom/poolarea/wellness-cta";
import { heroSectionSlides } from "@/lib/poolarea/english";
import { useLanguageContext } from "@/contexts/LanguageContext";
import { getLocalizedContent } from "@/lib/poolarea";
export default function PoolArea() {
  const {lang} = useLanguageContext();
  const {pricings, info, services} = getLocalizedContent(lang, "poolarea")

  return (
    <>
      <HeroSection slides={heroSectionSlides} />
      <ServiceCards services={services} />
      <Pricing pricings={pricings} info={info}/>
      <WellnessCTA/>
    </>
  );
}
