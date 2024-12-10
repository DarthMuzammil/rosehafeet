"use client";
import SectionHeading from "../SectionHeading";
import { benefits } from "@/lib/saltcave/saltcave";

function Benefit({ benefit }) {
  return (
    <div className="grid gap-3   grid-cols-1 place-items-center sm:grid sm:h-full sm:w-full sm:grid-cols-1 sm:place-items-center md:grid md:h-1/2 md:w-3/4 md:gap-12 md:grid-cols-3 md:place-items-center">
      {benefit.map((item, index) => (
        <div
          key={index}
          className={`h-auto w-[300px] sm:h-[145px] sm:w-[400px] md:h-[145px] md:w-[400px] pt-[20px] pl-[20px] pb-[10px] bg-gray-100 rounded-[20px] shadow-lg transition-transform 
              duration-300 ease-in-out hover:scale-105 hover:shadow-xl 
              ${index % 2 === 1 ? "sm:col-span-2" : ""}`}
        >
          <h1 className="text-black text-lg sm:text-lg md:text-2xl">
            {item.title}
          </h1>
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
    <>
    <div
      style={{
        backgroundImage: "url('/saltcave/background.png')",
        height: "70vh",
        width: "100%",
      }}
      className="hidden md:flex md:flex-col"
    >
      <div className="flex flex-col h-full justify-start items-center gap-10">
        <div className="flex justify-center  items-center pt-[80px] flex-row w-full">
          <SectionHeading>Benefits of Salt Cave</SectionHeading>
        </div>
        <Benefit benefit={benefits} />
      </div>
    </div>
      <div
        style={{
          backgroundImage: "url('/saltcave/background.png')",
          height: "65vh",
          width: "100%",
        }}
        className="flex flex-col md:hidden "
      >
        <div className="flex  justify-center mt-12  items-center flex-row w-full">
          <SectionHeading>Benefits of Salt Cave</SectionHeading>
        </div>
        <Benefit benefit={benefits} />
      </div>
    </>
  );
}
