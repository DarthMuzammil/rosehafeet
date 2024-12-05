"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Dumbbell, Droplet, NotebookIcon as Lotus, ShieldCheck } from 'lucide-react'
import { useState } from "react"

interface PricingOption {
  duration: string
  price: number
}

interface ServiceCard {
  title: string
  icon: React.ElementType
  options: PricingOption[]
}

export default function PricingPage() {
  const [selectedGender, setSelectedGender] = useState<"men" | "women">("men")

  const services: ServiceCard[] = [
    {
      title: "Pool Entrance",
      icon: ShieldCheck,
      options: [
        { duration: "1 Hour", price: 25 },
      ],
    },
    {
      title: "Indian Ayurvedic Massage",
      icon: Lotus,
      options: [
        { duration: "30 Minutes", price: 100 },
        { duration: "1 Hour", price: 175 },
      ],
    },
    {
      title: "Sport Massage",
      icon: Dumbbell,
      options: [
        { duration: "30 Minutes", price: 100 },
        { duration: "1 Hour", price: 175 },
      ],
    },
    {
      title: "Moroccan Bath",
      icon: Droplet,
      options: [
        { duration: "1 Session", price: 100 },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#f8f9fa] bg-[url('/wavy-pattern.svg')] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold text-[#1e6f5c] mb-4">Pricing</h1>
        <p className="text-center text-xl text-gray-600 mb-8">
          Choose the perfect package for your wellness journey
        </p>

        {/* Gender Toggle */}
        <div className="flex justify-center gap-2 mb-12">
          <Button
            onClick={() => setSelectedGender("men")}
            className={`px-12 ${
              selectedGender === "men"
                ? "bg-gradient-to-r from-[#2b4162] to-[#1e6f5c] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Men
          </Button>
          <Button
            onClick={() => setSelectedGender("women")}
            className={`px-12 ${
              selectedGender === "women"
                ? "bg-gradient-to-r from-[#2b4162] to-[#1e6f5c] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Women
          </Button>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#2b4162] to-[#1e6f5c] p-6">
                <div className="flex items-center gap-4">
                  <service.icon className="h-8 w-8 text-white" />
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {service.options.map((option) => (
                    <div
                      key={option.duration}
                      className="flex items-center justify-between border rounded-lg p-4"
                    >
                      <span className="text-gray-600">{option.duration}</span>
                      <span className="font-semibold">{option.price} AED</span>
                    </div>
                  ))}
                  <Button className="w-full bg-gradient-to-r from-[#2b4162] to-[#1e6f5c] text-white hover:opacity-90 transition-opacity">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-12">
          Custom packages and group bookings are available upon request.
        </p>
      </div>
    </div>
  )
}

