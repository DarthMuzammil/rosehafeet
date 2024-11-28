"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroSlider from "@/components/hero-slider";


export default function HeroSection() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-[#D9D9D9]">
      <HeroSlider/>
    </section>
  );
}
