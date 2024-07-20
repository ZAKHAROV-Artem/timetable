import { Swipeable } from "react-native-gesture-handler";
import DeleteSwipeAction from "./delete-swipe-action";

type SwipeableDeleteProps = {
  deleteAction: () => void;
  children: React.ReactNode;
  className?: string;
};
export default function SwipeableDelete({
  deleteAction,
  children,
  className,
}: SwipeableDeleteProps) {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <DeleteSwipeAction removeTeacher={deleteAction} className={className} />
      )}
    >
      {children}
    </Swipeable>
  );
}
