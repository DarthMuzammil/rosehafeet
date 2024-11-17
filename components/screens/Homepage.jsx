"use client";

import { useState, useEffect } from "react";
import { heroImages, transitionDelay, displayInterval } from "@/lib/constants/home";
import SplashScreen from "@/components/custom/SplashScreen";
import Header from "@/components/custom/Header";
import HeroBackgroundImage from "@/components/custom/HeroBackgroundImage";
import HeroContent from "@/components/custom/HeroContent";
import MainContainer from "@/components/custom/MainContainer";

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Handle loading state
    const loadingTimeout = setTimeout(() => setLoading(false), 2000);

    // Image rotation timer
    const imageTimer = setInterval(() => {
      setIsTransitioning(true);

      const transitionTimeout = setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, transitionDelay);

      return () => clearTimeout(transitionTimeout);
    }, displayInterval);

    return () => {
      clearTimeout(loadingTimeout);
      clearInterval(imageTimer);
    };
  }, []);

  return true ? (
    <SplashScreen loading={loading} />
  ) : (
    <div className="relative min-h-screen">
      <HeroBackgroundImage
        images={heroImages}
        isTransitioning={isTransitioning}
        currentImageIndex={currentImageIndex}
      />
      <Header />
      <MainContainer>
        <HeroContent
          isTransitioning={isTransitioning}
          currentImageIndex={currentImageIndex}
        />
      </MainContainer>
    </div>
  );
}
