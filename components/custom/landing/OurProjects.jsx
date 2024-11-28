"use client";
import SectionHeading from "../SectionHeading";
import CardStackWithInfo from "../CardStackWithInfo";
import { ourProjects } from "@/lib/homepage";
export default function OurProjects() {
  return (
    <section className="flex flex-col gap-24 items-center py-12 px-6">
      <SectionHeading className={'p-4'}>Our Projects</SectionHeading>
      {
        ourProjects.cards.map((card, index) => {
          if ((index + 1) % 2 === 0) {
            return <CardStackWithInfo key={index} cards={card.card} messageOrientation="left" heading={card.heading} />
          } else {
            return <CardStackWithInfo key={index} cards={card.card} heading={card.heading} />
          }
    
        })
      }
    </section>
  );
}
