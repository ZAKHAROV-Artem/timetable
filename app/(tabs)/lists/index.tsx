import FadeView from "@/components/animation/fade-view";
import ListItem from "@/components/lists/list-item";
import { useListsStore } from "@/store/use-lists-store";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";

export default function ListsPage() {
  const store = useListsStore();

  return (
    <FadeView>
      <FlashList
        data={store.lists}
        renderItem={({ item }) => <ListItem item={item} />}
        estimatedItemSize={100}
        ItemSeparatorComponent={() => (
          <View className="my-3 h-1 rounded-lg bg-gray-200" />
        )}
      />
    </FadeView>
  );
}
