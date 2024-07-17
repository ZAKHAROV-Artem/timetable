import { Check, ChevronDown } from "@/components/icons";
import { cn } from "@/lib/utils";
import * as SelectPrimitive from "@rn-primitives/select";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

type Option = SelectPrimitive.Option;

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { open } = SelectPrimitive.useRootContext();

  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex h-12 flex-row items-center justify-between rounded-md border border-white bg-white px-3 py-2 text-base [&>span]:line-clamp-1",
        props.disabled && "opacity-50",
        className,
      )}
      {...props}
    >
      <>{children}</>
      <ChevronDown
        size={16}
        aria-hidden={true}
        className={cn("rotate-0 text-black", {
          "rotate-180": !open,
        })}
      />
    </SelectPrimitive.Trigger>
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
    portalHost?: string;
  }
>(({ className, children, position = "popper", portalHost, ...props }, ref) => {
  return (
    <SelectPrimitive.Portal hostName={portalHost}>
      <SelectPrimitive.Overlay style={StyleSheet.absoluteFill}>
        <Animated.View entering={FadeIn} exiting={FadeOut}>
          <SelectPrimitive.Content
            ref={ref}
            position={position}
            style={{ width: "100%", padding: 7 }}
            {...props}
          >
            <View
              className={cn(
                "relative z-50 mt-1 max-h-96 w-full min-w-[8rem] overflow-hidden rounded-md bg-white shadow-md shadow-black/10 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                position === "popper" &&
                  "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",

                className,
              )}
            >
              <SelectPrimitive.Viewport
                className={cn(
                  "p-1",
                  position === "popper" &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
                )}
              >
                {children}
              </SelectPrimitive.Viewport>
            </View>
          </SelectPrimitive.Content>
        </Animated.View>
      </SelectPrimitive.Overlay>
    </SelectPrimitive.Portal>
  );
});
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("pb-2 pl-10 pr-2 text-base font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex flex-row items-center rounded-sm py-2 pl-10 pr-2",
      props.disabled && "opacity-50",
      className,
    )}
    {...props}
  >
    <View className="absolute left-3.5 flex h-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check size={16} strokeWidth={3} className="text-black" />
      </SelectPrimitive.ItemIndicator>
    </View>
    <SelectPrimitive.ItemText className="text-base" />
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("bg-muted -mx-1 my-1 h-px", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  type Option,
};
