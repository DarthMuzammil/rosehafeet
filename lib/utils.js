import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function loadSvg(path){
  const res = await fetch(path)
  return await res.text()
}
