import { cn } from "@/lib/utils";
import { Plus } from "lucide-react-native";
import { Button } from "./button";

type AddButtonProps = {
  className?: string;
} & React.ComponentProps<typeof Button>;
export default function AddButton({ className, ...props }: AddButtonProps) {
  return (
    <Button
      className={cn(
        "absolute bottom-24 left-1/2 z-40 flex -translate-x-1/2 items-center justify-center",
        className,
      )}
      variant={"icon"}
      size={"icon"}
      {...props}
    >
      <Plus className="h-5 w-5 text-white" />
    </Button>
  );
}
