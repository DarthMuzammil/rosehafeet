"use client"
import React from 'react'

function ResponsiveSVG ({ svgContent, className = '' })  {
  return (
    <div 
      className={`w-full h-auto ${className}`}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  )
}

export default ResponsiveSVG

