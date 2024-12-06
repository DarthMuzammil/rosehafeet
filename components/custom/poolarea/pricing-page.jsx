"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import LocalisedButton from "@/components/shared/LocalisedButton";

export default function PricingPage({ pricings }) {
  const [selectedGender, setSelectedGender] = useState("men");
  return (
    <div className=" bg-[#f8f9fa] bg-[url('/poolarea/pricingbg.jpeg')] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold text-[#1e6f5c] mb-4">
          الأسعار
        </h1>
        <p className="text-center text-xl text-gray-600 mb-8">
          اختر الباقة المثالية للرحلتك العافية
        </p>

        <div className="flex justify-center gap-2 mb-12">
          <Button
            onClick={() => setSelectedGender("men")}
            className={`px-12 ${
              selectedGender === "men"
                ? "bg-gradient-to-r from-[#2b4162] to-[#1e6f5c] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            للرجال
          </Button>
          <Button
            onClick={() => setSelectedGender("women")}
            className={`px-12 ${
              selectedGender === "women"
                ? "bg-gradient-to-r from-[#2b4162] to-[#1e6f5c] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            للنساء
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricings.map((service, index) => (
            <Card
              key={service.title + index}
              className="overflow-hidden shadow-lg"
            >
              <CardHeader className="bg-gradient-to-r from-[#2b4162] to-[#1e6f5c] p-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={service.icon}
                    width={50}
                    height={50}
                    alt="priceijij"
                  />
                  <h3 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
              </CardHeader>
              <CardContent className="p-6 h-full">
                <div className="flex flex-col justify-between  h-1/2">
                  {service.options.map((option, index) => (
                    <div
                      key={option.duration + index}
                      className="flex items-center justify-between border rounded-lg p-4"
                    >
                      <span className="text-gray-600">{option.duration}</span>
                      <span className="font-semibold">{option.price} AED</span>
                    </div>
                  ))}
                  <div className="flex-grow"></div>{" "}
                  {/* This will push the button to the bottom */}
                  <div className="flex flex-col justify-center items-center mb-4">
                    {" "}
                    {/* Add margin-bottom */}
                    <LocalisedButton
                      labelArabic={"احجز الآن"}
                      labelEnglish={"Book Now"}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-12 text-3xl">
          الباقات المخصصة والحجوزات الجماعية متوفرة عند الطلب
        </p>
      </div>
    </div>
  );
}
