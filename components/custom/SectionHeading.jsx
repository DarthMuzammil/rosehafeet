'use client'

export default function SectionHeading({ children, className }) {
    return (
      <p 
        className={`text-4xl md:text-5xl text-start overflow-visible font-extrabold bg-gradient-to-t from-[#2A3676] to-[#00A445] bg-clip-text text-transparent leading-tight ${className}`}
      >
        {children}
      </p>
    )
  }
