'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { heroContent, heroImages } from '@/lib/constants/homepage'
import SplashScreen from './custom/SplashScreen'

export default function LandingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [loading, setLoading] = useState(true)
  
  const images = heroImages

  useEffect(() => {
    // Simulate loading time for splash screen
    setTimeout(() => {
      setLoading(false)
    }, 2000)

    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1)
        setIsTransitioning(false)
      }, 1000)
    }, 5000)

    return () => clearInterval(timer);
  }, [])

  if (loading) {
    return (
      <SplashScreen loading={loading} />
    );
  }


function HeroBackgroundImage({isTransitioning, images, currentImageIndex}) {
  return (
      <div
      className={`fixed inset-0 w-full h-full transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
  )
}

  return (
    (<div className="relative min-h-screen">
      {/* Background Image */}
      <div
      className={`fixed inset-0 w-full h-full transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40" />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="relative w-32 h-16">
              <Image
                src="/image.jpg"
                alt="Rose Hafeet Logo"
                fill
                className="object-contain" />
            </Link>

            {/* Center text for desktop */}
            <h2
              className="text-2xl font-bold text-white hidden md:block absolute left-1/2 transform -translate-x-1/2">
              Rosehafeet
            </h2>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['Home', 'Properties', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-white hover:text-white/80 transition-colors">
                  {item}
                </Link>
              ))}
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="md:hidden p-0 text-white absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex justify-center mb-8">
                  <div className="relative w-32 h-16">
                    <Image
                      src="/image.jpg"
                      alt="Rose Hafeet Logo"
                      fill
                      className="object-contain" />
                  </div>
                </div>
                <nav className="flex flex-col space-y-4">
                  {['Home', 'Properties', 'About', 'Contact'].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="text-lg hover:text-primary transition-colors">
                      {item}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      {/* Hero Content */}
      <main className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-32 text-center">
          <div
            className={`transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
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
                className="bg-transparent text-black border-white hover:bg-white hover:text-black transition-colors">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>)
  );
}