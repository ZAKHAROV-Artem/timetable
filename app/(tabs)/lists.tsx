import FadeView from "@/components/animation/fade-view";
import { useListsStore } from "@/store/use-lists-store";
import { Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Link } from "expo-router";

export default function ListsPage() {
  const store = useListsStore();

  return (
    <FadeView>
      <FlashList
        data={store.lists}
        renderItem={({ item }) => (
          <Link
            href={`/lists/${item.slug}`}
            className="w-full flex-1 p-3 shadow-md"
          >
            <Text className="">{item.name}</Text>
          </Link>
        )}
        estimatedItemSize={100}
        ItemSeparatorComponent={() => (
          <View className="my-3 h-1 rounded-lg bg-gray-200" />
        )}
      />
    </FadeView>
  );
}
