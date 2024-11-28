"use client";
import SectionHeading from "../SectionHeading";
import { newsImages } from "@/lib/homepage";
import HorizontalCarousel from "../HorizontalCarousel";
export default function NewsSection() {
  return (
    <section className="flex flex-col gap-24 items-center py-12 px-6">
      <SectionHeading className={'p-4'}>News</SectionHeading>
      <HorizontalCarousel cards={newsImages} />
    </section>
  );
}
