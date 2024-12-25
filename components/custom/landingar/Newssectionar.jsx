"use client";
import SectionHeading from "../SectionHeading";
import { newsImages } from "@/lib/homepage/homepage";
import HorizontalCarousel from "../HorizontalCarousel";
import Button from "../../shared/Button";

function NewsFooter() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex justify-center items-center max-w-[810px] md:max-w-[600px] sm:max-w-[400px] text-center px-4">
        <p className="text-[#2A3676] text-2xl md:text-xl sm:text-base">
        مقابلة تلفزيونية مع سعادة السيد سالم حريز الراشدي 
        رئيس مجلس الإدارة، على قناة بينونة التلفزيونية
        </p>
      </div>
      <div className="flex justify-center items-center max-w-[810px] md:max-w-[600px] sm:max-w-[400px] text-center px-4">
        <p className="text-black text-lg md:text-base sm:text-sm">
                سعادة السيد سالم حريز الراشدي، رئيس مجلس الإدارة،
ظهر مؤخرًا في مقابلة تلفزيونية حصرية مع قناة بينونة التلفزيونية 
    . وخلال هذه المقابلة، شارك رؤى قيمة حول المبادرات الاستراتيجية،
    ورؤية النمو، والمساهمات المؤثرة لشركة روز حفيت ومجموعة بن حريز
القابضة. وسلطت المقابلة الضوء على التزامه بالابتكار والتميز وتنمية المجتمع
        </p>
      </div>
    </div>
  );
}

export default function NewsSection() {
  return (
    <section id="about" className="flex flex-col items-center gap-12 py-12 px-6">
      <SectionHeading className="p-4">أخبارنا</SectionHeading>
      <HorizontalCarousel cards={newsImages} />
      <NewsFooter />
    </section>
  );
}