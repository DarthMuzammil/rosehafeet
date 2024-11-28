"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function CardStack({ cards, cardShuffled, setShuffleCards }) {
  const [isHovered, setIsHovered] = useState(false);

  function imageClick() {
    setShuffleCards((prevCards) => {
      const [first, second, ...rest] = prevCards; // Destructure the first two cards and the rest
      return [second, ...rest, first]; // Reconstruct the array with the second card first, followed by the rest, and then the first card at the end
    });
  }
  return (
    <div
      className="relative w-96 h-52 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {cardShuffled &&
        cardShuffled.map((card, index) => {
          const isMiddle = index === 1;
          const isFirst = index === 0;
          const isLast = index === cards.length - 1;

          return (
            <Card
              key={card.id}
              className={cn(
                "absolute inset-0 transition-all duration-300 ease-in-out cursor-pointer rounded-[10px]",
                isHovered && "hover:shadow-xl"
              )}
              style={{
                zIndex: cards.length - index,
                transform: `
                  translateX(${isFirst ? "0px" : isLast ? "60px" : "-60px"})
                  scale(${1 - index * 0.05})
                `,
                transition: "all 0.3s ease-in-out",
              }}
            >
              <CardContent className="flex p-0 h-full">
                <Image
                  onClick={imageClick}
                  src={card.image}
                  alt="hello"
                  width={900}
                  height={700}
                />
              </CardContent>
              {isLast || !isFirst ? (
                <div className="absolute inset-0 bg-black opacity-50 pointer-events-none" />
              ) : null}
            </Card>
          );
        })}
    </div>
  );
}

export default function HorizontalCarousel({
  cards,
}) {
  const [cardShuffled, setShuffleCards] = useState(cards);
  return (
    <div className="flex flex-row">
      <CardStack
        cardShuffled={cardShuffled}
        setShuffleCards={setShuffleCards}
        cards={cards}
      />
    </div>
  );
}