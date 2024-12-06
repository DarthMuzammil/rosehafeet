"use client";
import HeroSection from "@/components/custom/landing/HeroSection";
import { ServiceCard } from "@/components/custom/poolarea/service-card";
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
      <div className="container mx-auto py-12 px-4">
        <div className="space-y-[100px]">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
      <PricingPage pricings={pricings}/>
      <WellnessCTA/>
    </>
  );
}
