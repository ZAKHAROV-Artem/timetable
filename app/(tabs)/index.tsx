import FadeView from "@/components/animation/fade-view";
import { ClassItem } from "@/components/class";
import SafeArea from "@/components/primitives/safe-area";
import { AddButton } from "@/components/ui/buttons";
import { Medium } from "@/components/ui/typography";
import { weekdays } from "@/data/weekdays";
import "@/global.css";
import { useClassesStore } from "@/store/use-classes-store";
import { Class } from "@/types/class";
import dayjs from "dayjs";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ScrollView, SectionList, View } from "react-native";

export default function Index() {
  const classes = useClassesStore((store) => store.classes);

  const sections = classes.reduce((acc: Record<string, Class[]>, classItem) => {
    const weekDay = classItem.weekDay;
    if (!acc[weekDay]) {
      acc[weekDay] = [];
    }
    acc[weekDay].push(classItem);
    return acc;
  }, {});

  const sectionData = Object.keys(sections)
    .sort((a, b) => weekdays.indexOf(a) - weekdays.indexOf(b))
    .map((weekDay) => ({
      title: weekDay,
      data: sections[weekDay].sort((a, b) =>
        dayjs(a.classStartsAt).diff(dayjs(b.classStartsAt)),
      ),
    }));

  return (
    <SafeArea>
      <FadeView>
        <LinearGradient
          colors={["white", "transparent"]}
          className="absolute top-0 z-10 h-5 w-full"
        />

        <AddButton onPress={() => router.push("/add-class")} />

        <ScrollView className="flex-1">
          <SectionList
            className="pb-24"
            scrollEnabled={false}
            sections={sectionData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ClassItem key={item.id} classItem={item} />
            )}
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
      </FadeView>
    </SafeArea>
  );
}
