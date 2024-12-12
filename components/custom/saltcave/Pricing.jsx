"use client";

import { useState, useEffect } from "react";
import SectionHeading from "../SectionHeading";
import Button from "../../shared/Button";
import ChildSVG from "@/public/saltcave/pricing/child.svg";
import Image from "next/image";

function getSessions(input) {
  if (input.includes("Individual Sessions")) {
    return "1 Session";
  } else if (input.includes("3 Sessions Package")) {
    return "3 Sessions";
  } else if (input.includes("6 Sessions Package")) {
    return "4 Sessions";
  } else {
    throw new Error("Invalid input");
  }
}

function Tabs({ tabs, curr, handleOnClick }) {
  return (
    <>
      <div className="hidden  md:flex md:flex-wrap md:gap-2 md:p-2  md:w-full md:justify-center">
        {tabs.map((item, index) => (
          <Button
            key={item.name}
            isSelected={curr === index}
            label={item.name}
            size="text-xs"
            className="flex-shrink-0" // Prevents buttons from shrinking
            onClick={() => handleOnClick(index)}
          />
        ))}
      </div>
      <div className="md:hidden flex flex-wrap gap-2 p-2  w-full justify-center md:justify-center">
        {tabs.map((item, index) => (
          <Button
            key={item.name}
            isSelected={curr === index}
            label={getSessions(item.name)}
            size="text-xs"
            className="flex-shrink-0" // Prevents buttons from shrinking
            onClick={() => handleOnClick(index)}
          />
        ))}
      </div>
    </>
  );
}

function PricingSection({ heading, plans }) {
  return (
    <>
      <div className="hidden md:w-[1220px] md:pb-12 md:pt-6 rounded-2xl sm:px-12 md:px-28  sm:flex sm:flex-col sm:gap-4 sm:shadow-[0px_6px_12px_0px_rgba(0,0,0,0.25)]     md:flex md:flex-col md:gap-4 md:shadow-[0px_6px_12px_0px_rgba(0,0,0,0.25)]">
        <div className="flex justify-center items-center flex-row w-full">
          <h1>{heading}</h1>
        </div>
        {plans.map((plan, index) => {
          return (
            <div
              key={plan.title + index}
              className="flex bg-[#F0F0F0] rounded-2xl items-center p-0 sm:p-2 md:p-4 justify-between flex-row gap-2"
            >
              <div className="h-[50px] w-[50px] sm:h-[50px] sm:w-[50px] md:h-[100px] md:w-[100px]">
                <Image src={ChildSVG} width={100} height={100} alt=";" />
              </div>

              <div className="flex flex-row gap-2">
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
      <div className="sm:hidden shadow-2xl rounded-lg bg-gray-50 p-4 flex flex-col gap-2">
        <div className="flex justify-center items-center flex-row w-full">
          <h1>{heading}</h1>
        </div>
        {plans.map((plan, index) => {
          return (
            <div
              key={plan.title + index}
              className="flex items-center rounded-lg bg-[#F0F0F0] w-full justify-between flex-row"
            >
              <div className="h-[45px] w-[45px] ml-4  ">
                <Image src={ChildSVG} width={100} height={100} alt=";" />
              </div>

              <div className="flex   flex-col w-1/2">
                <div className="flex flex-col p-2 gap-2">
                  <p className="text-lg">{plan.title}</p>
                  <p className="bg-gradient-to-l from-[#00A445] to-[#2A3676] bg-clip-text text-transparent font-semibold">
                    {plan.price}
                  </p>
                </div>
              </div>

              <Button
                isSelected={true}
                size={" h-[30px] w-[120px] mr-4 text-xs "}
                label={"Book Now"}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default function Pricing({ pricing }) {
  const [curr, setCurr] = useState(0);

  function handleOnClick(index) {
    setCurr(() => index);
  }
  return (
    <div className="flex flex-col items-center mt-4 justify-center gap-5">
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
