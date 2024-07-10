import { List } from "@/types/lists/list";
import { Link } from "expo-router";
import { Text } from "react-native";

type ListItemProps = { item: List };
export default function ListItem({ item }: ListItemProps) {
  return (
    <Link href={`/lists/${item.slug}`} className="w-full flex-1 p-3 shadow-md">
      <Text className="">{item.name}</Text>
    </Link>
  );
}
