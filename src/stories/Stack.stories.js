import styled from "styled-components";
import Stack from "../components/stack";

const StackItemPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  width: 150px;
  height: 150px;
  background-color: #bada55;
`;

export default {
  title: "Test Components/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
};

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => (
      <StackItemPlaceholder>{n + 1}</StackItemPlaceholder>
    ))}
  </Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "row",
  spacing: 2,
  wrap: false,
  numberOfChildren: 8
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: "column",
  spacing: 2,
  wrap: false,
  numberOfChildren: 5
};

export const NoSpacing = Template.bind({});
NoSpacing.args = {
  direction: "row",
  spacing: 0,
  wrap: false,
  numberOfChildren: 5
};

export const WrapOverflow = Template.bind({});
WrapOverflow.args = {
  direction: "row",
  spacing: 2,
  wrap: true,
  numberOfChildren: 25
};