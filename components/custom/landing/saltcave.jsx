"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useMenuContext } from "@/contexts/MenuContext";
import OurProjects from "./custom/landing/OurProjects";
import AboutSection from "./custom/landing/AboutSection";
import HeroSection from "./custom/landing/HeroSection";
import NewsSection from "./custom/landing/NewsSection";
import SpaFacilities from "./spa-facilities";

export function SaltCave() {
  const {isMenuOpen, setMenu} = useMenuContext();

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-16"
          >
            <nav className="flex flex-col items-center space-y-8 py-8">
              <a
                href="#home"
                className="text-xl"
                onClick={() => setMenu(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-xl"
                onClick={() => setMenu(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-xl"
                onClick={() => setMenu(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-xl"
                onClick={() => setMenu(false)}
              >
                Contact
              </a>
              <Button onClick={() => setMenu(false)}>Book Now</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <main>
    
<SpaFacilities />
      </main>
    </div>
  );
}
