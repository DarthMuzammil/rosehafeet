"use client";
import SectionHeading from "../SectionHeading";
import { benefits } from "@/lib/saltcave/saltcave";

function Benefit({ benefit }) {
  return (
    <div className="grid gap-3 h-1/2 w-1/2 grid-cols-1 place-items-center sm:grid sm:h-full sm:w-full sm:grid-cols-1 sm:place-items-center md:grid md:h-1/2 md:w-3/4 md:gap-12 md:grid-cols-3 md:place-items-center">
      {benefit.map((item, index) => (
        <div
          key={index}
          className={`h-[145px] w-[400px] sm:h-[145px] sm:w-[400px] md:h-[145px] md:w-[400px] pt-[30px] pl-[30px] bg-gray-100 rounded-[20px] shadow-lg transition-transform 
              duration-300 ease-in-out hover:scale-105 hover:shadow-xl 
              ${index % 2 === 1 ? "col-span-2" : ""}`}
        >
          <h1 className="text-black text-lg sm:text-lg md:text-2xl">{item.title}</h1>
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
