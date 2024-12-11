"use client";
import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { aboutUs } from "@/lib/homepage/homepage";

function CompanyBanner() {
  return (
    <>
      <div className="hidden sm:w-full sm:flex sm:justify-evenly sm:flex-row  sm:h-44 sm:bg-[#F5F5F5]">
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
      <div className=" sm:hidden bg-[#F5F5F5] w-full flex justify-evenly items-center flex-row  h-32">
        <Image
          src="/main/CompanyLogo1.png"
          alt="About foreground"
          width={108}
          height={108}
          className="rounded-[18px] mr-7"
        />
        <Image
          src="/main/CompanyLogo2.png"
          alt="About foreground"
          width={108}
          height={108}
          className="rounded-[18px]"
        />
        <div className="flex h-20 flex-row">
          <Image
            src="/main/CompanyLogo3.png"
            alt="About foreground"
            width={108}
            height={50}
            className="rounded-[18px] transform scale-75"
          />{" "}
        </div>
      </div>
    </>
  );
}
export default function AboutSection() {
  return (
    <>
      <section id="about" className="md:flex md:flex-col">
        <div className="py-16 md:py-24 justify-center gap-4 flex flex-col">
          <div className="flex flex-col w-full gap-3 p-12">
            <SectionHeading>{aboutUs.heading}</SectionHeading>
            <p>{aboutUs.description}</p>
          </div>
          <div className=" w-full flex flex-row justify-center items-center h-[300px]">
            <Image
              src={"/main/about.png"}
              width={350}
              height={300}
              alt="buhuh"
            />
          </div>
        </div>
        <CompanyBanner />
      </section>
    </>
  );
}
