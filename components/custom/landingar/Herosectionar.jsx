"use client";
import HeroSlider from "@/components/custom/HeroSlider";

export default function HeroSection({slides}) {
  return (
    <section id="home" className="  bg-[#D9D9D9]">
      <HeroSlider slides={slides}/>
    </section>
  );
}
