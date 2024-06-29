import { clsx, type ClassValue } from "clsx";
import type { LucideIcon } from "lucide-react-native";
import { cssInterop } from "nativewind";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function iconWithClassName(icons: LucideIcon[]) {
  for (let icon of icons) {
    cssInterop(icon, {
      className: {
        target: "style",
        nativeStyleToProp: {
          color: true,
          opacity: true,
        },
      },
    });
  }
}
