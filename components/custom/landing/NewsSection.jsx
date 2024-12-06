"use client";
import SectionHeading from "../SectionHeading";
import { newsImages } from "@/lib/homepage/homepage";
import HorizontalCarousel from "../HorizontalCarousel";
import Button from "../../shared/Button";

function NewsFooter() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center h-[120px] w-[810px] md:w-[600px] sm:w-[400px]">
        <p className="text-[#2A3676] text-2xl md:text-2xl sm:text-sm">
          Television Interview with His Excellency Mr. Salem Horaiz Al Rashdi,
          Chairman of the Board, by Baynounah TV
        </p>
      </div>
      <div className="flex flex-row justify-center items-center h-[120px] w-[810px] md:w-[600px] sm:w-[500px]">
        <p className="text-black text-lg md:text-lg sm:text-sm">
          His Excellency Mr. Salem Horaiz Al Rashdi, Chairman of the Board,
          recently featured in an exclusive television interview with Baynounah
          TV. During the segment, he shared valuable insights on strategic
          initiatives, the vision for growth, and the impactful contributions of
          Rose Hafeet and Bin Horaiz Holding Group. The interview highlighted
          his commitment to innovation, excellence, and community development.
        </p>
      </div>
      <div className="flex w-full mt-[30px] flex-row justify-start items-center">
        <Button label={"Read More"} isSelected />
      </div>
    </div>
  );
}
export default function NewsSection() {
  return (
    <section className="flex flex-col gap-24 items-center py-12 px-6">
      <SectionHeading className={"p-4"}>News</SectionHeading>
      <HorizontalCarousel cards={newsImages} />
      <NewsFooter />
    </section>
  );
}
