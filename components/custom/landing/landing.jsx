"use client";

import { useMenuContext } from "@/contexts/MenuContext";
import OurProjects from "./OurProjects";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";

export function Landing() {
  const { isMenuOpen, setMenu } = useMenuContext();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col">
        <HeroSection />
        <AboutSection/>
        <OurProjects />
      </div>
    </div>
  );
}
