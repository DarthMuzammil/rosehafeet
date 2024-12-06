"use client";

import { useState, useEffect } from "react";
import SectionHeading from "../SectionHeading";
import Button from "../../shared/Button";
import ChildSVG from "@/public/saltcave/pricing/child.svg";
import Image from "next/image";

function Tabs({ tabs, curr, handleOnClick }) {
  return (
    <div className="flex w-full h-11 justify-center items-center flex-row gap-2">
      {tabs.map((item, index) => {
        return (
          <Button
            key={item.name}
            isSelected={curr === index}
            label={item.name}
            size={' h-[40px] w-[200px] text-xs md:text-lg sm:text-md sm:h-[10px] sm:w-[300px] md:h-[58px] md:w-[300px] '}
            onClick={() => handleOnClick(index)}
          />
        );
      })}
    </div>
  );
}

function PricingSection({ heading, plans }) {

  return (
    <div className="flex flex-col w-full sm:px-12 md:px-28 gap-4 shadow-[0px_6px_12px_0px_rgba(0,0,0,0.25)]  sm:flex sm:flex-col sm:gap-4 sm:shadow-[0px_6px_12px_0px_rgba(0,0,0,0.25)]     md:flex md:flex-col md:gap-4 md:shadow-[0px_6px_12px_0px_rgba(0,0,0,0.25)]">
      <div className="flex justify-center items-center flex-row w-full">
        <h1>{heading}</h1>
      </div>
      {plans.map((plan, index) => {
        return (
          <div
            key={plan.title + index}
            className="flex bg-[#F0F0F0] items-center p-0 sm:p-2 md:p-12 justify-between flex-row gap-2"
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
  );
}
export default function Pricing({ pricing }) {
  const [curr, setCurr] = useState(0);

  function handleOnClick(index) {
    setCurr(() => index);
  }
  return (
    <div className="flex flex-col items-center  justify-center gap-5">
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
