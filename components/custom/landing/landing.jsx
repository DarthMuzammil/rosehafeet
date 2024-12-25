"use client";

import { useMenuContext } from "@/contexts/MenuContext";
import OurProjects from "./OurProjects";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import { getLocalizedContent } from "@/lib/poolarea";
import NewsSection from "./NewsSection";
import { useLanguageContext } from "@/contexts/LanguageContext";

export function Landing() {
  const { isMenuOpen, setMenu } = useMenuContext();
  const { lang } = useLanguageContext();
  const { heroSectionSlides, aboutUs, facilities, services } = getLocalizedContent(lang, "homepage");

  return (
    <div className="flex flex-col">
      <HeroSection slides={heroSectionSlides} />
      <AboutSection aboutUs={aboutUs} />
      <OurProjects facilities={facilities} />
      <NewsSection />
    </div>
  );
}
