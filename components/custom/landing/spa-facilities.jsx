import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SpaFacilities() {
  const facilities = [
    {
      title: "The Salt Cave",
      description: "Restore vitality and energy to your bodies with a salt therapy session",
      mainImage: "/image.jpg",
      thumbnails: [
        { image: "/image.jpg", label: "Salt Cave" },
        { image: "/image.jpg", label: "Salt Cave Interior" },
        { image: "/image.jpg", label: "Salt Cave Loungers" },
      ]
    },
    {
      title: "Pools",
      description: "Relax and rejuvenate in our healing sulfur pools luxurious Jacuzzi retreats.",
      mainImage: "/image.jpg",
      thumbnails: [
        { image: "/image.jpg", label: "Sulfur Pool" },
        { image: "/image.jpg", label: "Jacuzzi" },
        { image: "/image.jpg", label: "Pool Area" },
      ]
    },
    {
      title: "Game Area",
      description: "Experience thrilling adventures with zipline, bungee trampoline, and fun-filled train activities.",
      mainImage: "/image.jpg",
      thumbnails: [
        { image: "/image.jpg", label: "Bungee Trampoline" },
        { image: "/image.jpg", label: "Zipline" },
        { image: "/image.jpg", label: "Train Ride" },
      ]
    }
  ]

  return (
    (<div
      className="container mx-auto p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {facilities.map((facility, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={facility.mainImage}
              alt={facility.title}
              fill
              className="object-cover"
              priority={index === 0} />
          </div>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-2">{facility.title}</h2>
            <p className="text-neutral-500 mb-6 dark:text-neutral-400">{facility.description}</p>
            <div className="relative">
              <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
                {facility.thumbnails.map((thumb, thumbIndex) => (
                  <div key={thumbIndex} className="relative flex-none">
                    <Image
                      src={thumb.image}
                      alt={thumb.label}
                      width={150}
                      height={100}
                      className="rounded-lg object-cover" />
                    <p className="text-sm text-center mt-1">{thumb.label}</p>
                  </div>
                ))}
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -left-3">
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full bg-white/50 backdrop-blur-sm dark:bg-neutral-950/50">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-3">
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full bg-white/50 backdrop-blur-sm dark:bg-neutral-950/50">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>)
  );
}

