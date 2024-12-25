"use client";
import HeroSection from "@/components/custom/landing/HeroSection";
import Benefits from "@/components/custom/saltcave/Benefits";
import Pricing from "@/components/custom/saltcave/Pricing";
import SaltCaveFooter from "@/components/custom/saltcave/SaltCaveFooter";
import ProductShowcase from "@/components/custom/saltcave/Products";
import { useLanguageContext } from "@/contexts/LanguageContext";
import { getLocalizedContent } from "@/lib/poolarea";
export default function SaltCave() {
  const { lang } = useLanguageContext();
  const { heroSectionSlides, pricing, benefits, products} = getLocalizedContent(lang, "saltcave");
  return (
    <>
      <HeroSection slides={heroSectionSlides}/>
      <Benefits benefits={benefits}/>
      <Pricing pricing={pricing} />
      <ProductShowcase products={products}/>
      <SaltCaveFooter />
    </>
  );
}
