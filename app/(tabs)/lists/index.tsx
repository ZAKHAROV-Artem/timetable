import FadeView from "@/components/animation/fade-view";
import { useListsStore } from "@/store/use-lists-store";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import ListItem from "@/components/lists/list-item";

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
