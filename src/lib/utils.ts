import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function readH(className: string): number {
  const classes = className.split(" ");

  for (const c of classes) {
    if (!c.startsWith("h-[")) continue;

    const height = className.replace("h-[", "").replace("%]", "");
    return Number(height);
  }

  return 0;
}
