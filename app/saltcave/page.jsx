"use client";
import HeroSection from "@/components/custom/landing/HeroSection";
import Benefits from "@/components/custom/saltcave/Benefits";
import Pricing from "@/components/custom/saltcave/Pricing";
import SaltCaveFooter from "@/components/custom/saltcave/SaltCaveFooter";
import { pricing } from "@/lib/saltcave";
export default function SaltCave() {
  return (
    <>
      {/* <HeroSection />
      <Benefits /> */}
      <Pricing pricing={pricing} />
      {/* <SaltCaveFooter /> */}
    </>
  );
}
