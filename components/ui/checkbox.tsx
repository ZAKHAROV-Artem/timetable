import { Check } from "@/components/icons";
import { cn } from "@/lib/utils";
import * as CheckboxPrimitive from "@rn-primitives/checkbox";
import * as React from "react";
import { View } from "react-native";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "h-8 w-8 shrink-0 rounded-md border disabled:cursor-not-allowed disabled:opacity-50",
        props.checked && "bg-royal-indigo",
        className,
      )}
      {...props}
    >
      <View className={cn("flex h-full w-full items-center justify-center")}>
        <Check size={16} strokeWidth={3.5} className="text-whisper-white" />
      </View>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
