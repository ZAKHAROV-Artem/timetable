import { cn } from "@/lib/utils";
import * as React from "react";
import { TextInput } from "react-native";

const Input = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  React.ComponentPropsWithoutRef<typeof TextInput>
>(({ className, placeholderClassName, ...props }, ref) => {
  return (
    <TextInput
      ref={ref}
      className={cn(
        "h-12 rounded-md bg-white px-3 text-base lg:text-sm",
        props.editable === false && "opacity-50",
        className,
      )}
      placeholderClassName={cn(placeholderClassName)}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
