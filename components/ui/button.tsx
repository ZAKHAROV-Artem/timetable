import { TextClassContext } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Pressable } from "react-native";

const buttonVariants = cva("group flex items-center justify-center", {
  variants: {
    variant: {
      default:
        "bg-royal-indigo web:hover:opacity-90 active:opacity-90 rounded-md",
      icon: "bg-blue-500 rounded-full active:opacity-90",
    },
    size: {
      default: "h-10 px-4 py-2 native:h-12 native:px-5 native:py-3",
      icon: "w-14 h-14",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const buttonTextVariants = cva("", {
  variants: {
    variant: {
      default: "text-white font-medium",
      icon: "",
    },
    size: {
      default: "text-base",
      icon: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  ButtonProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <TextClassContext.Provider
      value={cn(buttonTextVariants({ variant, size }))}
    >
      <Pressable
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        role="button"
        {...props}
      />
    </TextClassContext.Provider>
  );
});
Button.displayName = "Button";

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
