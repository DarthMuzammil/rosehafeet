"use client";
import OurMission from "@/components/custom/about/OurMission";
import AboutSection from "@/components/custom/landing/AboutSection";
import { about } from "@/lib/about/about";

export default function About() {
  return (
    <>
    <AboutSection />
    <OurMission ourmission={about.ourmission} />
    </>
  );
}
