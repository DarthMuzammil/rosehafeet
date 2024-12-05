"use client";

import Button from "./Button";

export default function SaltCaveFooter() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center h-20 py-20">
        Custom packages and group bookings are available on request
      </div>
      <div className="flex flex-col bg-[#F5F5F5] w-full justify-center items-center gap-8 h-20 py-20">
        <p className="text-2xl">
          Enhance your well-being today! Book your session at the Salt Cave in
          Al Ain or Dubai and embrace the healing power of halotherapy.
        </p>
        <Button
          label={"Book Now"}
          onClick={() => {}}
          isSelected
          size={" h-[50px] w-[250px] "}
        />
      </div>
    </div>
  );
}
