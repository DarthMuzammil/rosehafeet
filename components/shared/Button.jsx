"use client";

import React from "react";

function InvertedButton({ label, size, onClick, disabled }) {
  const words = label.split(" ");
  const firstPart = words.slice(0, -1).join(" ");
  const lastWord = words[words.length - 1];

  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 
        bg-white
        border-2 border-transparent
        rounded-lg
        ${size ? size : "text-lg"}
        transition-all duration-300
        ${disabled ? "bg-[#EAEAEA] cursor-not-allowed" : "hover:scale-105"}
      `}
      style={{
        backgroundClip: "padding-box",
        border: "2px solid transparent",
        backgroundImage:
          "linear-gradient(white, white), linear-gradient(96.76deg, #2A3676 1.7%, #00A445 96.47%)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      }}
    >
      <span className="font-medium">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A3676] to-[#2A3676]">
          {firstPart}{" "}
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A445] to-[#00A445]">
          {lastWord}
        </span>
      </span>
    </button>
  );
}

function NormalButton({ label, size, onClick, disabled, isSelected }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 ${
        isSelected
          ? `text-white text-xl ${size ? size : " "}`
          : `text-[#5C5C5C]`
      } font-medium rounded-lg ${
        size ? size : ` `
      } transition-all duration-300 ${
        disabled
          ? "bg-[#EAEAEA] cursor-not-allowed"
          : `${
              isSelected
                ? `bg-gradient-to-l from-[#00A445] to-[#2A3676] hover:scale-105`
                : ` bg-[#EAEAEA] `
            }`
      }`}
    >
      {label}
    </button>
  );
}

export default function Button({
  label,
  onClick,
  disabled,
  isSelected,
  size,
  inverted = false,
}) {
  return inverted ? (
    <InvertedButton
      label={label}
      size={size}
      isSelected={isSelected}
      disabled={disabled}
      onClick={onClick}
    />
  ) : (
    <NormalButton
      label={label}
      size={size}
      onClick={onClick}
      isSelected={isSelected}
      disabled={disabled}
    />
  );
}
