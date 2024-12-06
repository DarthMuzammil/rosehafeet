"use client";
import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { aboutUs } from "@/lib/homepage/homepage";

export default function AboutSection() {
  return (
    <section id="about" className="flex flex-col">
      <div className="py-16 md:py-24 justify-center gap-3 flex flex-row">
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
              src="/main/about.png"
              alt="About foreground"
              width={326}
              height={358}
              objectFit="cover"
              className="rounded-[18px]"
            />
          </div>
        </div>
        <div className="flex flex-col w-1/4 gap-3">
          <SectionHeading>{aboutUs.heading}</SectionHeading>
          <p>{aboutUs.description}</p>
        </div>
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
      </div>

      <div className="w-full flex justify-evenly flex-row  h-44 bg-[#F5F5F5]">
        <Image
          src="/main/CompanyLogo1.png"
          alt="About foreground"
          width={178}
          height={178}
          className="rounded-[18px] mr-7"
        />
        <Image
          src="/main/CompanyLogo2.png"
          alt="About foreground"
          width={178}
          height={178}
          className="rounded-[18px]"
        />
        <Image
          src="/main/CompanyLogo3.png"
          alt="About foreground"
          width={300}
          objectFit="cover"
          height={178}
  className="rounded-[18px] transform scale-75"
        />
      </div>
    </section>
  );
}
