"use client";
import HeroSection from "@/components/custom/landing/HeroSection";
import { services } from "@/lib/wellness/wellness";
import { ServiceCard } from "@/components/custom/poolarea/service-card";
import PricingPage  from "@/components/custom/wellness/pricing-page";
import WellnessCTA  from "@/components/custom/poolarea/wellness-cta";
import { heroSectionSlides } from "@/lib/wellness/wellness";
export default function Wellness() {
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
      <PricingPage/>
      <WellnessCTA/>
    </>
  );
}
