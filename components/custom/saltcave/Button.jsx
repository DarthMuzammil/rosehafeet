import React from "react";

const Button = ({ label, onClick, disabled, isSelected, size }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 ${isSelected ? `text-white` : `text-[#5C5C5C]`} font-medium rounded-lg ${size ? size : ` `} transition-all duration-300 ${
        disabled
          ? "bg-[#EAEAEA] cursor-not-allowed"
          : `${isSelected ? `bg-gradient-to-l from-[#00A445] to-[#2A3676] hover:scale-105` : ` bg-[#EAEAEA] `}`
      }`}
    >
      {label}
    </button>
  );
};

export default Button; 