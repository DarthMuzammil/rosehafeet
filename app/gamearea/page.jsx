"use client";
import HeroSection from "@/components/custom/landing/HeroSection";
import { services } from "@/lib/gamearea/gamearea";
import PricingPage from "@/components/custom/gamearea/pricing-page";
import WellnessCTA from "@/components/custom/gamearea/wellness-cta";
import { heroSectionSlides } from "@/lib/gamearea/gamearea";
import ServiceCards from "@/components/shared/ServiceCard";



export default function PoolArea() {
  return (
    <>
      <HeroSection slides={heroSectionSlides} />
      <ServiceCards services={services} />
      <PricingPage/>
      <WellnessCTA/>
    </>
  );
}
