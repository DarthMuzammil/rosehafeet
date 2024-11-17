"use client"
import { Button } from "@/components/ui/button"
import { heroContent, heroImages } from '@/lib/constants/home'

export default function HeroContent({isTransitioning, currentImageIndex}) {
  return (
    <div className="container mx-auto px-4 py-32 text-center">
      <div
        className={`transition-opacity duration-1000 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {heroContent[currentImageIndex].title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          {heroContent[currentImageIndex].description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            View Properties
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-black border-white hover:bg-white hover:text-black transition-colors"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
