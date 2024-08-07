import { X } from "@/components/icons";
import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@rn-primitives/dialog";
import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlayNative = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> & {
    entering?: any;
    exiting?: any;
  }
>(({ className, children, entering, exiting, ...props }, ref) => {
  return (
    <DialogPrimitive.Overlay
      style={StyleSheet.absoluteFill}
      ref={ref}
      {...props}
    >
      <Animated.View
        entering={entering || FadeIn.duration(150)}
        exiting={exiting || FadeOut.duration(150)}
        className={cn(
          "z-50 flex h-full w-full items-center justify-center bg-black/20 p-2",
          className,
        )}
      >
        <>{children}</>
      </Animated.View>
    </DialogPrimitive.Overlay>
  );
});

DialogOverlayNative.displayName = "DialogOverlayNative";

const DialogOverlay = Platform.select({
  default: DialogOverlayNative,
});

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    portalHost?: string;
    entering?: any;
    exiting?: any;
    overlayClassName?: string;
  }
>(({ className, children, portalHost, entering, exiting, ...props }, ref) => {
  return (
    <DialogPortal hostName={portalHost}>
      <DialogOverlay entering={entering} exiting={exiting}>
        <DialogPrimitive.Content ref={ref} {...props}>
          <View
            className={cn(
              "z-50 gap-4 rounded-lg border border-black bg-white p-6 shadow-xl",
              className,
            )}
          >
            {children}
          </View>
        </DialogPrimitive.Content>
      </DialogOverlay>
    </DialogPortal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) => {
  return (
    <View
      className={cn("flex flex-col gap-1.5 sm:text-left", className)}
      {...props}
    >
      <DialogClose className={"absolute right-0"}>
        <X size={18} className={cn("text-black/40")} />
      </DialogClose>
      {children}
    </View>
  );
};
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) => (
  <View
    className={cn(
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, children, ...props }, ref) => (
  <Text
    ref={ref}
    {...props}
    className={cn(
      "max-w-[95%] text-xl font-semibold leading-none tracking-tight",
      className,
    )}
  >
    {children}
  </Text>
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, children, ...props }, ref) => (
  <Text
    ref={ref}
    {...props}
    className={cn("text-base text-gray-500", className)}
  >
    {children}
  </Text>
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
