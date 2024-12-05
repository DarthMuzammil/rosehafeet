"use client";

import { useState } from "react";
import SectionHeading from "../SectionHeading";
import Button from "./Button";
import Image from "next/image";

function Tabs({ tabs, curr, handleOnClick }) {
  return (
    <div className="flex flex-row gap-2">
      {tabs.map((item, index) => {
        return (
          <Button
            key={item.name}
            isSelected={curr === index}
            label={item.name}
            onClick={() => handleOnClick(index)}
          />
        );
      })}
    </div>
  );
}

function PricingSection({ heading, plans }) {
  return (
    <div className="flex flex-col gap-4 shadow-[0px_6px_12px_0px_rgba(0,0,0,0.25)]">
      <div className="flex justify-center items-center flex-row w-full">
        <h1>{heading}</h1>
      </div>
      {plans.map((plan, index) => {
        return (
          <div
            key={plan.title + index}
            className="flex bg-[#F0F0F0] w-[1120px] h-[110px] items-center p-12 justify-between flex-row gap-2"
          >
            <div className="flex flex-row gap-2">
              <Image src={plan.image} width={80} height={80} alt="testname" />
              <div className="flex flex-col p-2 gap-2">
                <p className="text-lg">{plan.title}</p>
                <p className="bg-gradient-to-l from-[#00A445] to-[#2A3676] bg-clip-text text-transparent font-semibold">
                  {plan.price}
                </p>
              </div>
            </div>

            <Button
              isSelected={true}
              size={" h-[50px] w-[190px] "}
              label={"Book Now"}
            />
          </div>
        );
      })}
    </div>
  );
}
export default function Pricing({ pricing }) {
  const [curr, setCurr] = useState(0);

  function handleOnClick(index) {
    setCurr(() => index);
  }
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <SectionHeading>Pricing</SectionHeading>
      <p>{pricing.tabs[curr].info}</p>
      <Tabs tabs={pricing.tabs} curr={curr} handleOnClick={handleOnClick} />
      <PricingSection
        heading={pricing.tabs[curr].name}
        plans={pricing.tabs[curr].plans}
      />
    </div>
  );
}
