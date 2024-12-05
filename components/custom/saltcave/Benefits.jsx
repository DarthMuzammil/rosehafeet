"use client";
import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { benefits } from "@/lib/saltcave";

function Benefit({ benefit }) {
  return (
    <div className="grid h-1/2 w-1/2 grid-cols-4 place-items-center">
      {benefit.map((item, index) => (
        <div
          key={index}
          className={`h-[145px] w-[400px] pt-[30px] pl-[30px] bg-gray-50 rounded-[20px] shadow-lg transition-transform 
              duration-300 ease-in-out hover:scale-105 hover:shadow-xl 
              ${index % 2 === 1 ? "col-span-2" : ""}`}
        >
          <h1 className="text-black text-2xl">{item.title}</h1>
          <div className="font-sans text-[14px] font-normal leading-[21px] text-left decoration-slice decoration-[0]">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
}
export default function Benefits() {
  return (
    <div
      style={{
        backgroundImage: "url('/saltcave/background.png')",
        backgroundRepeat: "repeat",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="flex flex-col h-full justify-start items-center gap-10">
        <div className="flex justify-center  items-center pt-[80px] flex-row w-full">
          <SectionHeading>Benefits of Salt Cave</SectionHeading>
        </div>
        <Benefit benefit={benefits} />
      </div>
    </div>
  );
}
