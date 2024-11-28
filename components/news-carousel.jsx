"use client";
import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const newsItems = [
  {
    id: 1,
    title: "Breaking News 1",
    image: "/main/SaltCave.jpeg",
  },
  {
    id: 2,
    title: "Breaking News 2",
    image: "/main/SaltCaveItemsLandsacape.jpeg",
  },
  {
    id: 3,
    title: "Breaking News 3",
    image: "/main/StaffMassageParlour.jpeg",
  },
  {
    id: 4,
    title: "Breaking News 4",
    image: "/main/SaltCave.jpeg",
  },
  {
    id: 5,
    title: "Breaking News 5",
    image: "/main/SaltCave.jpeg",
  },
]

export default function NewsCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  console.log(currentSlide)
  return (
    (<div
      className="w-full bg-white min-h-screen flex flex-col items-center justify-center p-8 dark:bg-neutral-950">
      <h1 className="text-4xl font-bold mb-12 text-teal-600">News</h1>
      <div className="w-full max-w-7xl relative">
        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          className="w-full"
          setApi={(api) => {
            api?.on("select", () => {
              setCurrentSlide(api.selectedScrollSnap())
            })
          }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {newsItems.map((item, index) => (
              <CarouselItem
                key={item.id}
                className="pl-2 md:pl-4 basis-full md:basis-2/3 lg:basis-1/2">
                <Card
                  className={cn(
                    "relative overflow-hidden transition-all duration-300",
                    "h-[200px] md:h-[400px]",
                    currentSlide === index
                      ? "opacity-100 scale-100 z-10"
                      :  currentSlide === index + 1 ? "opacity-50 scale-90 z-0 -mr-96" : "opacity-50 scale-90 z-0 -ml-96" 
                  )}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority={index === currentSlide} />
                  <div className="absolute inset-0 bg-blue-900/20" />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12">
            <ChevronLeft className="h-8 w-8" />
          </CarouselPrevious>
          <CarouselNext className="hidden md:flex -right-12 h-12 w-12">
            <ChevronRight className="h-8 w-8" />
          </CarouselNext>
        </Carousel>
      </div>
    </div>)
  );
}

