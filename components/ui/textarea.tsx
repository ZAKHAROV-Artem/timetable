import { cn } from "@/lib/utils";
import * as React from "react";
import { TextInput } from "react-native";

const Textarea = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  React.ComponentPropsWithoutRef<typeof TextInput>
>(
  (
    {
      className,
      multiline = true,
      numberOfLines = 4,
      placeholderClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <TextInput
        ref={ref}
        className={cn(
          "min-h-[80px] w-full rounded-md bg-white px-3 py-2 text-base lg:text-sm",
          props.editable === false && "opacity-50",
          className,
        )}
        placeholderClassName={cn(placeholderClassName)}
        multiline={multiline}
        numberOfLines={numberOfLines}
        textAlignVertical="top"
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
