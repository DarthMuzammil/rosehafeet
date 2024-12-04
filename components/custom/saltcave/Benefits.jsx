"use client";
import Image from "next/image";
import SectionHeading from "../SectionHeading";

const benefits = [
  {
    title: "Respiratory Relief",
    description:
      "Alleviates symptoms of asthma, allergies, sinusitis, and other respiratory conditions",
  },
  {
    title: "Stress Reduction",
    description:
      "Promotes relaxation, reduces anxiety, and improves sleep quality.",
  },
  {
    title: "Skin Rejuvenation",
    description:
      "Helps with skin conditions like eczema, psoriasis, and acne by detoxifying and cleansing.",
  },
  {
    title: "Immune Boost",
    description:
      "Strengthens the body’s defense mechanism through ion-rich air.",
  },
  {
    title: "Energy Enhancement",
    description:
      "Recharges your mind and body, promoting a sense of balance and vitality.",
  },
];

function Benefit({ benefit }) {
  return (
    <div className="grid grid-cols-3 gap-4">
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
    <div>
      <h1>Benefits of Salt Cave Therapy</h1>
      <div
        style={{
          backgroundImage: "url('/saltcave/background.png')",
          backgroundRepeat: "repeat",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="flex justify-center items-center pt-[80px] flex-row w-full">
          <SectionHeading>Benefits of Salt Cave</SectionHeading>
        </div>
        <Benefit benefit={benefits} />
      </div>
    </div>
  );
}
