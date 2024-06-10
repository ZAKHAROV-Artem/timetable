import * as Slot from "@/components/primitives/slot";
import { SlottableTextProps, TextRef } from "@/components/primitives/types";
import * as React from "react";
import { Platform, Text as RNText } from "react-native";
import { cn } from "@/lib/utils";

const P = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn("text-base text-foreground", className)}
        ref={ref}
        {...props}
      />
    );
  }
);
P.displayName = "P";

const Lead = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn("text-xl text-muted-foreground", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Lead.displayName = "Lead";

const Large = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn("text-xl text-foreground font-semibold", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Large.displayName = "Large";

const Medium = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn(
          "text-xl text-foreground font-light leading-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Medium.displayName = "Medium";
const Small = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn(
          "text-sm text-foreground font-medium leading-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Small.displayName = "Small";

const Muted = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn("text-sm text-muted-foreground", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Muted.displayName = "Muted";

export { Large, Lead, Medium, Muted, P, Small };
