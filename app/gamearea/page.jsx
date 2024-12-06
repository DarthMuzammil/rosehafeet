"use client";
import HeroSection from "@/components/custom/landing/HeroSection";
import { services } from "@/lib/gamearea/gamearea";
import { ServiceCard } from "@/components/custom/gamearea/service-card";
import PricingPage from "@/components/custom/gamearea/pricing-page";
import WellnessCTA from "@/components/custom/gamearea/wellness-cta";
import { heroSectionSlides } from "@/lib/gamearea/gamearea";



export default function PoolArea() {
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
