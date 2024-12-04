"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

function FacilityCard({ mainImage, heading, content, images }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  return (
    <Card className="w-full max-w-xl overflow-hidden">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={mainImage}
          alt={heading}
          fill
          className="object-cover"
          priority
        />
      </div>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-2">{heading}</h2>
        <p className="text-neutral-500 mb-6 dark:text-neutral-400">{content}</p>

        <div className="relative">
          <div className="flex items-center gap-4 overflow-hidden">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 h-8 w-8 flex items-center justify-center bg-white/80 rounded-full shadow-lg dark:bg-neutral-950/80"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div
              className="flex gap-4 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 108}%)` }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative min-w-[200px] aspect-[4/3] rounded-lg overflow-hidden",
                    index === activeIndex &&
                      "ring-2 ring-neutral-900 dark:ring-neutral-50"
                  )}
                >
                  <Image
                    src={image}
                    alt={`${heading} gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 h-8 w-8 flex items-center justify-center bg-white/80 rounded-full shadow-lg dark:bg-neutral-950/80"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Services({
  images,
  heading,
  content,
  mainImage,
}) {
  return (
    <div className="grid gap-8 p-4 md:p-6">
      <FacilityCard
        heading={heading}
        content={content}
        mainImage={mainImage}
        images={images}
      />
    </div>
  );
}
