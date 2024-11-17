"use client";

import Image from "next/image";
import Link from "next/link";
import { LOGOURL } from "@/lib/constants/common";

export default function Logo({
  href = "/",
  src = LOGOURL,
  alt = "Logo",
  priority = false,
  placeholder = "empty",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  width = 128,
  height = 64,
  className = "object-contain",
}) {
  return (
    <Link
      href={href}
      className="relative"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        src={src}
        alt={alt}
        priority={priority}
        placeholder={placeholder}
        fill
        sizes={sizes}
        className={className}
      />
    </Link>
  );
}
