import { Swipeable } from "react-native-gesture-handler";
import DeleteSwipeAction from "./delete-swipe-action";

type SwipeableDeleteProps = {
  deleteAction: () => void;
  children: React.ReactNode;
};
export default function SwipeableDelete({
  deleteAction,
  children,
}: SwipeableDeleteProps) {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <DeleteSwipeAction removeTeacher={deleteAction} />
      )}
    >
      {children}
    </Swipeable>
  );
}
