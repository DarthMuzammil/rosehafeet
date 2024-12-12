"use client"
import { useState } from "react"
import MakeBookingModal from "@/components/shared/MakeBookingModal"
import Button from "@/components/shared/Button"
export default function WellnessCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
    return (
      <section className="py-8 sm:py-12 md:py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Book your session now and experience the ultimate in relaxation and rejuvenation.
          </p>
          <div className="flex flex-row justify-center items-center">
          <Button
          label="Book Now"
          onClick={() => openModal()}
          isSelected
          size="h-[45px] flex items-center justify-center w-full sm:w-[250px] sm:h-[50px]"
        />
        <MakeBookingModal isOpen={isModalOpen} closeModal={closeModal} />
          </div>
        </div>
      </section>
    )
  }
  
  