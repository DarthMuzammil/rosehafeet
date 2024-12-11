"use client";
import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { aboutUs } from "@/lib/homepage/homepage";

export default function OurMission({ ourmission }) {
  return (
    <>
      <section id="about" className="hidden  xl:flex xl:flex-col">
        <div className="py-16 md:py-24 justify-center gap-3 flex flex-row">
          <div className="flex flex-col">
            <div
              className="relative "
              style={{ width: "426px", height: "358px" }}
            >
              <div className="absolute left-0 top-0">
                <Image
                  src="/main/homepageAboutSectionImage1.png"
                  alt="About background"
                  width={174}
                  height={150}
                  objectFit="cover"
                  className="rounded-[18px]"
                />
              </div>
              <div className="absolute left-0 bottom-0">
                <Image
                  src="/main/homepageAboutSectionImage2.png"
                  alt="About foreground"
                  width={174}
                  height={150}
                  objectFit="cover"
                  className="rounded-[18px]"
                />
              </div>
              <div className="absolute left-32 top-20">
                <Image
                  src="/main/homepageAboutSectionImage3.png"
                  alt="About foreground"
                  width={174}
                  height={150}
                  objectFit="cover"
                  className="rounded-[18px]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-1/4 gap-3">
            <SectionHeading>{"Our Mission"}</SectionHeading>
            <p>{ourmission}</p>
          </div>
          <div className="relative" style={{ width: "426px", height: "358px" }}>
            {/* Background image */}
            <div className="absolute left-0 top-0">
              <Image
                src="/main/aboutbg.jpeg"
                alt="About background"
                width={326}
                height={358}
                objectFit="cover"
                className="rounded-[18px]"
              />
            </div>
            {/* Foreground image, offset to the right */}
            <div className="absolute left-7 top-7">
              <Image
                src="/main/CustomerFunActivity.jpg"
                alt="About foreground"
                width={326}
                height={358}
                objectFit="cover"
                className="rounded-[18px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="flex flex-col xl:hidden">
        <div className="py-16 md:py-24 justify-center gap-4 flex flex-col">
          <div className="flex flex-col w-full gap-3 p-12">
            <SectionHeading>Our Mission</SectionHeading>
            <p>{ourmission}</p>
          </div>
          <div className=" w-full flex flex-row justify-center items-center h-[300px]">
            <Image
              src={"/main/CustomerFunActivity.jpg"}
              width={350}
              height={300}
              alt="buhuh"
            />
          </div>
        </div>

      </section>
    </>
  );
}
