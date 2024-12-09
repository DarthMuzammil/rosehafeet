"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils/utils";

export function MobileViewCardStack({ cards, cardShuffled, setShuffleCards }) {
  const [isHovered, setIsHovered] = useState(false);

  function imageClick() {
    setShuffleCards((prevCards) => {
      const [first, second, ...rest] = prevCards;
      return [second, ...rest, first];
    });
  }

  return (
    <div
      className="relative  w-full h-[200px] sm:h-[300px] md:h-[350px]"
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
              key={index}
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
                  src={card}
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

// export default function HorizontalCarousel({ cards }) {
//   const [cardShuffled, setShuffleCards] = useState(cards);

//   function imageClick(direction) {
//     setShuffleCards((prevCards) => {
//       const [first, second, ...rest] = prevCards;

//       if (direction === 'left') {
//         return [...rest, first, second]; // Left traversal
//       } else if (direction === 'right') {
//         return [second, ...rest, first]; // Right traversal
//       }
//       return prevCards;
//     });
//   }

//   function rightButton() {
//     imageClick("right");
//   }

//   function leftButton() {
//     imageClick("left");
//   }

//   return (
//     <><div className="hidden  w-full justify-between items-center px-4 sm:px-2">
//       <div onClick={leftButton} className="cursor-pointer">
//         <Image
//           src={"/homepage/leftbutton.svg"}
//           width={40}
//           height={21}
//           alt="leftbutton" />
//       </div>
//       <CardStack
//         cardShuffled={cardShuffled}
//         setShuffleCards={setShuffleCards}
//         cards={cards} />
//       <div onClick={rightButton} className="cursor-pointer">
//         <Image
//           src={"/homepage/rightbutton.svg"}
//           width={40}
//           height={21}
//           alt="rightbutton" />
//       </div>
//     </div><div className="sm:visible flex w-full justify-between items-center px-4 sm:px-2">
//         <MobileViewCardStack
//           cardShuffled={cardShuffled}
//           setShuffleCards={setShuffleCards}
//           cards={cards} />
//       </div></>
//   );
// }

// "use client";

// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import { cn } from "@/lib/utils/utils";

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
      className="relative w-[810px] h-[400px] "
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
              key={index}
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
                  src={card}
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

export default function HorizontalCarousel({ cards }) {
  const [cardShuffled, setShuffleCards] = useState(cards);

  function imageClick(direction) {
    setShuffleCards((prevCards) => {
      const [first, second, ...rest] = prevCards; // Destructure the first two cards and the rest

      if (direction === "left") {
        return [...rest, first, second]; // Left traversal: move first two elements to the end
      } else if (direction === "right") {
        return [second, ...rest, first]; // Right traversal: move first element to the end
      }
      return prevCards; // No change if no valid direction is given
    });
  }

  function rightButton() {
    imageClick("right");
  }
  function leftButton() {
    imageClick("left");
  }
  return (
    <>
      <div className="hidden sm:flex  sm:w-full   sm:justify-evenly sm:items-center sm:flex-row">
        <div onClick={leftButton}>
          <Image
            src={"/homepage/leftbutton.svg"}
            width={40}
            height={21}
            alt="leftbutton"
          />
        </div>
        <CardStack
          cardShuffled={cardShuffled}
          setShuffleCards={setShuffleCards}
          cards={cards}
        />
        <div onClick={rightButton}>
          <Image
            src={"/homepage/rightbutton.svg"}
            width={40}
            height={21}
            alt="rightbutton"
          />
        </div>
      </div>
      <div className="sm:hidden flex w-full justify-between items-center px-4 sm:px-2">
        <MobileViewCardStack
          cardShuffled={cardShuffled}
          setShuffleCards={setShuffleCards}
          cards={cards}
        />
      </div>
    </>
  );
}
