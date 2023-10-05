import { IconType } from "react-icons";

import { FlexBox } from "../styled/flex-box";
import Colors from "../../utils/colors";

type Size = "sm" | "md" | "lg";

interface Icon {
  faIcon: IconType;
  active: boolean;
  activeTooltipText: string;
}

interface Props {
  size: Size;
  gap?: number;
  icons: Icon[];
}

const getIconSize = (size: Size) => {
  switch (size) {
    case "sm":
      return 20;
    case "md":
      return 30;
    case "lg":
      return 40;
    default:
      return 30;
  }
};

const StatusIconsStack: React.FC<Props> = ({ size, gap = 6, icons }) => {
  const sizeInPx = getIconSize(size);
  return (
    <FlexBox width="auto" gap={`${gap}px`}>
      {icons.map((icon) => (
        <icon.faIcon
          color={icon.active ? Colors.gray5 : Colors.gray2}
          size={sizeInPx}
        />
      ))}
    </FlexBox>
  );
};

export default StatusIconsStack;
