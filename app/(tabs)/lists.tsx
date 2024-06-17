import FadeView from "@/components/animation/fade-view";
import { Button } from "@/components/ui/button";
import { useListsStore } from "@/store/use-lists-store";
import { Text } from "react-native";

export default function ListsPage() {
  const store = useListsStore();

  const handleAddList = () => {
    store.addList({
      id: Math.random().toString(),
      name: "New List",
    });
  };
  return (
    <FadeView>
      {store.lists.map((list) => (
        <Text key={list.id}>{list.name}</Text>
      ))}
      <Button onPress={handleAddList}>
        <Text>Add List</Text>
      </Button>
    </FadeView>
  );
}
