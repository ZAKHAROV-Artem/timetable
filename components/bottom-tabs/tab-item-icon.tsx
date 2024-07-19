import { BookOpen, Home, List } from "@/components/icons";
import { cn } from "@/lib/utils";

type Props = {
  route: { name: string };
  className?: string;
};
export default function TabItemIcon({ route, className }: Props) {
  switch (route.name) {
    case "index":
      return <Home className={cn("text-lg text-black/50", className)} />;
    case "lists":
      return <List className={cn("text-lg text-black/50", className)} />;
    case "homework":
      return <BookOpen className={cn("text-lg text-black/50", className)} />;
    default:
      return null;
  }
}
