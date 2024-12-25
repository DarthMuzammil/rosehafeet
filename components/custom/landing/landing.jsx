"use client";

import { useMenuContext } from "@/contexts/MenuContext";
import OurProjects from "./OurProjects";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import NewsCarousel from "./news-carousel";
import NewsSection from "./NewsSection";
import { heroSectionSlides } from "@/lib/homepage/homepage";

export function Landing() {
  const { isMenuOpen, setMenu } = useMenuContext();

  return (
      <div className="flex flex-col">
        <HeroSection slides={heroSectionSlides} />
        <AboutSection/>
        <OurProjects />
        <NewsSection />
      </div>
  );
}
