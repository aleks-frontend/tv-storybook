import StatusIconsStack from "../components/status-icons-stack";
import {
  FaBatteryHalf,
  FaClipboardCheck,
  FaLock,
  FaPuzzlePiece,
  FaRadiationAlt,
  FaShareSquare,
  FaStopwatch,
  FaGrimace,
  FaGrinAlt,
  FaGrinBeamSweat,
  FaGrinBeam,
  FaGrinHearts,
  FaGrinTongueSquint,
} from "react-icons/fa";

export default {
  title: "Trustview components/StatusIconsStack",
  component: StatusIconsStack,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    gap: { control: { type: "number" } }
  },
};

const defaultIcons = [
  {
    faIcon: FaClipboardCheck,
    active: true,
    activeTooltipText: "some text",
  },
  {
    faIcon: FaBatteryHalf,
    active: false,
    activeTooltipText: "some text",
  },
  {
    faIcon: FaLock,
    active: false,
    activeTooltipText: "some text",
  },
  {
    faIcon: FaPuzzlePiece,
    active: false,
    activeTooltipText: "some text",
  },
  {
    faIcon: FaRadiationAlt,
    active: false,
    activeTooltipText: "some text",
  },
  {
    faIcon: FaShareSquare,
    active: false,
    activeTooltipText: "some text",
  },
  {
    faIcon: FaStopwatch,
    active: false,
    activeTooltipText: "some text",
  },
];

const faGrinIcons = [
  {
    faIcon: FaGrimace,
    active: true,
    activeTooltipText: "some text",
  },
  {
    faIcon: FaGrinAlt,
    active: false,
    activeTooltipText: "some text",
  },
  {
    faIcon: FaGrinBeamSweat,
    active: false,
    activeTooltipText: "some text",
  },
  {
    faIcon: FaGrinBeam,
    active: false,
    activeTooltipText: "some text",
  },
  {
    faIcon: FaGrinHearts,
    active: false,
    activeTooltipText: "some text",
  },
  {
    faIcon: FaGrinTongueSquint,
    active: false,
    activeTooltipText: "some text",
  },
];

const Template = (args) => <StatusIconsStack {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  icons: defaultIcons,
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
  icons: defaultIcons,
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  icons: defaultIcons,
};

export const AllSelected = Template.bind({});
AllSelected.args = {
  size: "md",
  icons: defaultIcons.map((icon) => ({
    ...icon,
    active: true,
  })),
};

export const NoneSelected = Template.bind({});
NoneSelected.args = {
  size: "md",
  icons: defaultIcons.map((icon) => ({
    ...icon,
    active: false,
  })),
};

export const EvenSelected = Template.bind({});
EvenSelected.args = {
  size: "md",
  icons: defaultIcons.map((icon, index) => ({
    ...icon,
    active: index % 2,
  })),
};

export const RandomSelected = Template.bind({});
RandomSelected.args = {
  size: "md",
  icons: defaultIcons.map(icon => ({
    ...icon,
    active: Math.random() < 0.5,
  })),
};

export const NoGap = Template.bind({});
NoGap.args = {
  size: "md",
  gap: 0,
  icons: defaultIcons.map(icon => ({
    ...icon,
    active: Math.random() < 0.5,
  })),
};

export const GrinIcons = Template.bind({});
GrinIcons.args = {
  size: "md",
  icons: faGrinIcons.map(icon => ({
    ...icon,
    active: Math.random() < 0.5,
  })),
};

