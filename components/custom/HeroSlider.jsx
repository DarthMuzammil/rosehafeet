"use client";
import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    image: "/homepage/hero/1.jpeg",
    title: "Salt Cave Serenity",
    description: "Experience ultimate relaxation in our serene salt cave."
  },
  {
    image: "/homepage/hero/2.jpeg",
    title: "Healing Atmosphere",
    description: "Breathe in the therapeutic air of our salt cave."
  },
  {
    image: "/homepage/hero/3.jpeg",
    title: "Natural Detox",
    description: "Enjoy a natural detox in the calming environment of salt crystals."
  },
  {
    image: "/homepage/hero/4.jpeg",
    title: "Rejuvenating Escape",
    description: "Refresh your mind and body with a visit to our salt cave."
  },
  {
    image: "/homepage/hero/5.jpeg",
    title: "Game Area: Zipline",
    description: "Adreline rush with zipline."
  },
  {
    image: "/homepage/hero/6.jpeg",
    title: "Tranquil Retreat",
    description: "Unwind in the tranquil ambiance of the salt cave."
  },
];
export default function HeroSlider({}) {
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
                className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-black sm:text-5xl md:text-6xl">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg text-black md:text-xl">
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
