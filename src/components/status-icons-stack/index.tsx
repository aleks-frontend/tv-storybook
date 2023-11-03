import { IconType } from "react-icons";

import { FlexBox } from "../styled/flex-box";
import Colors from "../../utils/colors";
import * as Tooltip from "@radix-ui/react-tooltip";
import "../../index.css";

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
    <FlexBox width="auto" gap={`${gap}px`} margin="50px 0 0">
      <Tooltip.Provider>
        {icons.map((icon, index) => (
          <Tooltip.Root key={index} disableHoverableContent={true}>
            <Tooltip.Trigger asChild>
              <div>
                <icon.faIcon
                  color={icon.active ? Colors.gray5 : Colors.gray2}
                  size={sizeInPx}
                />
              </div>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="TooltipContent" sideOffset={5}>
                Aliquip laboris qui irure excepteur fugiat enim ad dolore. Ullamco deserunt nostrud nostrud mollit non cupidatat nisi sint sint laboris officia. Tempor pariatur labore eu velit pariatur id adipisicing esse. Qui adipisicing magna incididunt ut sunt nostrud ad culpa ipsum sit laboris ullamco occaecat Lorem.
                <Tooltip.Arrow className="TooltipArrow" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        ))}
      </Tooltip.Provider>
    </FlexBox>
  );
};

export default StatusIconsStack;
