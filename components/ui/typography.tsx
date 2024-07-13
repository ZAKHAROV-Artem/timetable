import * as Slot from "@/components/primitives/slot";
import { SlottableTextProps, TextRef } from "@/components/primitives/types";
import { cn } from "@/lib/utils";
import * as React from "react";
import { Platform, Text as RNText } from "react-native";

const P = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn("text-foreground text-base", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
P.displayName = "P";

const Lead = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn("text-muted-foreground text-xl", className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Lead.displayName = "Lead";

const Large = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn("text-foreground text-xl font-semibold", className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Large.displayName = "Large";

const Medium = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn(
          "text-foreground text-xl font-light leading-none",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Medium.displayName = "Medium";
const Small = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn(
          "text-foreground text-sm font-medium leading-none",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Small.displayName = "Small";

const Muted = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn("text-muted-foreground text-sm", className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Muted.displayName = "Muted";

export { Large, Lead, Medium, Muted, P, Small };
