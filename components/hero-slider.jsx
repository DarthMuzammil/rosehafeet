"use client";
import { useState, useEffect } from "react"
import Image from "next/image"

// Sample slides data
const slides = [
  {
    image: "/main/SaltCaveItemsLandsacape.jpeg",
    title: "Experience Unmatched Relaxation and Adventure at Rose Hafeet",
    description: "Discover wellness, thrills, and unforgettable memories with our unique attractions healing experiences in Al Mubazzarah Park."
  },
  {
    image: "/main/StaffSaltCave.jpeg",
    title: "Immerse Yourself in Luxury and Tranquility",
    description: "Indulge in our world-class spa facilities and experience the perfect blend of modern comfort natural serenity."
  },
  {
    image: "/main/StaffSaltCave.jpeg",
    title: "Adventure Awaits at Every Corner",
    description: "From thrilling activities to peaceful retreats, create lasting memories in our carefully crafted environments."
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [fadeIn, setFadeIn] = useState(true)

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setFadeIn(false) // Start fade out
      
      // Change slide after fade out
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setFadeIn(true) // Start fade in
      }, 500) // Half of the transition time
      
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(slideInterval);
  }, [])

  return (
    (<section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={slides[currentSlide].image}
          alt="Background"
          fill
          className="object-cover"
          priority />
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40" />
      </div>
      {/* Content */}
      <div className="relative h-full w-full">
        <div className="container mx-auto h-full px-4 md:px-6">
          <div className="flex h-full items-center">
            <div
              className={`max-w-2xl transition-opacity duration-1000 ${
                fadeIn ? "opacity-100" : "opacity-0"
              }`}>
              <h1
                className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg text-gray-200 md:text-xl">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setFadeIn(false)
              setTimeout(() => {
                setCurrentSlide(index)
                setFadeIn(true)
              }, 500)
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              currentSlide === index 
                ? "bg-white w-6" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`} />
        ))}
      </div>
    </section>)
  );
}

