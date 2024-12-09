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
          Television Interview with His Excellency Mr. Salem Horaiz Al Rashdi,
          Chairman of the Board, by Baynounah TV
        </p>
      </div>
      <div className="flex justify-center items-center max-w-[810px] md:max-w-[600px] sm:max-w-[400px] text-center px-4">
        <p className="text-black text-lg md:text-base sm:text-sm">
          His Excellency Mr. Salem Horaiz Al Rashdi, Chairman of the Board,
          recently featured in an exclusive television interview with Baynounah
          TV. During the segment, he shared valuable insights on strategic
          initiatives, the vision for growth, and the impactful contributions of
          Rose Hafeet and Bin Horaiz Holding Group. The interview highlighted
          his commitment to innovation, excellence, and community development.
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <Button label={"Read More"} isSelected />
      </div>
    </div>
  );
}

export default function NewsSection() {
  return (
    <section className="flex flex-col items-center gap-12 py-12 px-6">
      <SectionHeading className="p-4">News</SectionHeading>
      <HorizontalCarousel cards={newsImages} />
      <NewsFooter />
    </section>
  );
}