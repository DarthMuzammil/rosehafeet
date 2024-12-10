"use client";
import HeroSection from "@/components/custom/landing/HeroSection";
import { services } from "@/lib/wellness/wellness";
import PricingPage  from "@/components/custom/wellness/pricing-page";
import WellnessCTA  from "@/components/custom/poolarea/wellness-cta";
import { heroSectionSlides } from "@/lib/wellness/wellness";
import ServiceCards from "@/components/shared/ServiceCard";
export default function Wellness() {
  return (
    <>
      <HeroSection slides={heroSectionSlides} />
      <ServiceCards  services={services} />
      <PricingPage/>
      <WellnessCTA/>
    </>
  );
}
