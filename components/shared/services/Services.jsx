"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils/utils";
import Image from "next/image";

function CarouselLeftButton({ prevSlide }) {
  return (
    <button
      onClick={prevSlide}
      className="absolute left-0 z-10 h-8 w-8 flex items-center justify-center bg-white/80 rounded-full shadow-lg dark:bg-neutral-950/80"
      aria-label="Previous slide"
    >
      <ChevronLeft className="h-6 w-6" />
    </button>
  );
}

function CarouselRightButton({ nextSlide }) {
  return (
    <button
      onClick={nextSlide}
      className="absolute right-0 z-10 h-8 w-8 flex items-center justify-center bg-white/80 rounded-full shadow-lg dark:bg-neutral-950/80"
      aria-label="Next slide"
    >
      <ChevronRight className="h-6 w-6" />
    </button>
  );
}
function Carousel({
  prevSlide,
  activeIndices,
  images,
  heading,
  nextSlide,
}) {
  return (
    <div className=" relative flex items-center gap-4 overflow-hidden">
      <CarouselLeftButton prevSlide={prevSlide} />
      <div className="flex gap-4 transition-transform duration-300 ease-in-out">
        {activeIndices.map((i, index) => (
          <div
            key={i}
            className={cn(
              "relative min-w-[200px] aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
            )}
          >
            <Image
              src={images[i]}
              alt={`${heading} gallery image}`}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>
      <CarouselRightButton nextSlide={nextSlide} />
    </div>
  );
}
function FacilityCard({ mainImage, heading, content, images }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeIndices, setActiveIndices] = React.useState([0, 1, 2]);

  const nextSlide = () => {
    setActiveIndices((prevIndices) =>
      prevIndices.map((value) => (value === images.length - 1 ? 0 : value + 1))
    );
  };

  const prevSlide = () => {
    setActiveIndices((prevIndices) =>
      prevIndices.map((value) => (value === 0 ? images.length - 1 : value - 1))
    );
  };

  return (
    <Card className="w-full max-w-xl shadow-lg overflow-hidden">
      <div className="p-5  rounded-lg">
        <div className="relative aspect-video w-full shadow-lg rounded-lg">
          <Image
            src={mainImage}
            alt={heading}
            fill
            className="object-cover rounded-[14px]"
            unoptimized
          />
        </div>
      </div>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-2">{heading}</h2>
        <p className="text-neutral-500 mb-6 dark:text-neutral-400">{content}</p>
        <Carousel
          activeIndices={activeIndices}
          images={images}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </CardContent>
    </Card>
  );
}

export default function Services({ images, heading, content, mainImage }) {
  return (
    <FacilityCard
      heading={heading}
      content={content}
      mainImage={mainImage}
      images={images}
    />
  );
}
