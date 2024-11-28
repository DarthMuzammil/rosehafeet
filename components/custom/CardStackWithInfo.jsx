"use client";

import { useState } from "react";
import CardStack from "./CardStack";

function HeadingWithMessage({ heading, message, orientation }) {
  return orientation === "right" ? (
    <div className="flex gap-3 p-12 w-1/2  flex-col">
      <p className="text-[#2A3676] text-lg font-bold">{heading}</p>
      <p className=" text-md ">{message}</p>
    </div>
  ) : (
<div className="flex gap-3 p-12 items-end w-1/2 flex-col">
  <p className="text-[#2A3676] text-lg font-bold text-right">{heading}</p>
  <p className="text-md text-right">{message}</p>
</div>

  );
}
export default function CardStackWithInfo({
  cards,
  heading,
  messageOrientation = "right",
}) {
  const [cardShuffled, setShuffleCards] = useState(cards);
  return messageOrientation === "right" ? (
    <div className="flex flex-row">
      <CardStack
        cardShuffled={cardShuffled}
        setShuffleCards={setShuffleCards}
        cards={cards}
      />
      <HeadingWithMessage
        heading={heading}
        message={cardShuffled[0].message}
        orientation={messageOrientation}
      />
    </div>
  ) : (
    <div className="flex flex-row">
      <HeadingWithMessage
        heading={heading}
        message={cardShuffled[0].message}
        orientation={messageOrientation}
      />
      <CardStack
        cardShuffled={cardShuffled}
        setShuffleCards={setShuffleCards}
        cards={cards}
      />
    </div>
  );
}
