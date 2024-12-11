"use client";

import { useState } from "react";
import MakeBookingModal from "@/components/shared/MakeBookingModal";
import Button from "../../shared/Button";

export default function SaltCaveFooter() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center h-20 py-6 sm:py-12 px-4 sm:px-8 text-center">
        Custom packages and group bookings are available on request
      </div>
      <div className="flex flex-col bg-[#F5F5F5] w-full justify-center items-center gap-8 py-6 sm:py-12 px-4 sm:px-8 text-center">
        <p className="text-lg sm:text-2xl">
          Enhance your well-being today! Book your session at the Salt Cave in
          Al Ain or Dubai and embrace the healing power of halotherapy.
        </p>
        <Button
          label="Book Now"
          onClick={() => openModal()}
          isSelected
          size="h-[45px] flex items-center justify-center w-full sm:w-[250px] sm:h-[50px]"
        />
        <MakeBookingModal isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </div>
  );
}
