"use client";

import { useState, useEffect } from "react";
import { heroImages, transitionDelay, displayInterval } from "@/lib/constants/home";
import SplashScreen from "./custom/SplashScreen";
import Header from "./custom/Header";
import HeroBackgroundImage from "./custom/HeroBackgroundImage";
import HeroContent from "./custom/HeroContent";
import MainContainer from "./custom/MainContainer";

export default function LandingPage() {
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

  return loading ? (
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
