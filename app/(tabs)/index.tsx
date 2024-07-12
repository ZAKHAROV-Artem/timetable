import FadeView from "@/components/animation/fade-view";
import SafeArea from "@/components/primitives/safe-area";
import { Subject } from "@/components/subject";
import { AddButton } from "@/components/ui/buttons";
import { Medium } from "@/components/ui/typography";
import "@/global.css";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, SectionList, View } from "react-native";

export default function Index() {
  return (
    <SafeArea>
      <FadeView>
        <LinearGradient
          colors={["white", "transparent"]}
          className="absolute top-0 z-10 h-5 w-full"
        />
        <ScrollView className="flex-1">
          <SectionList
            className="pb-24"
            scrollEnabled={false}
            sections={[
              {
                title: "20 September 2022",
                data: Array.from({ length: 6 }, (_, index) => index + 1),
              },
              {
                title: "21 September 2022",
                data: Array.from({ length: 5 }, (_, index) => index + 7),
              },
              {
                title: "22 September 2022",
                data: Array.from({ length: 4 }, (_, index) => index + 12),
              },
            ]}
            keyExtractor={(_, index) => `key-${index}`}
            renderItem={({ item }) => <Subject key={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Medium className="mt-3">{title}</Medium>
            )}
            SectionSeparatorComponent={() => <View className="h-6" />}
            ItemSeparatorComponent={() => <View className="h-4" />}
          />
        </ScrollView>
        <LinearGradient
          colors={["transparent", "white"]}
          className="absolute bottom-0 z-10 h-14 w-full"
        />
        <AddButton onPress={() => {}} />
      </FadeView>
    </SafeArea>
  );
}
