import styled from 'styled-components';
import Tooltip from "../components/tooltip";
import { FlexBox } from '../components/styled/flex-box';
import { H5, P } from '../components/styled/texts';
import Colors from '../utils/colors';

const TriggerElement = styled(FlexBox)`
  margin: ${props => props.margin || "50px"};
  width: 200px;
  background-color: #FD625E;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
`;

const SeparatorLine = styled.div`
	margin: 5px 0;
	width: 100%;
	height: 1px;
	background: ${Colors.blue1};
`;

export default {
  title: "Trustview components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: { type: "radio" },
      options: ["left", "right", "top", "bottom"],
    },
  },
};

const Template = (args) => <Tooltip {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  triggerElement: <TriggerElement>Some trigger element</TriggerElement>,
  children: <div>Regular tooltip on top</div>,
  padding: "2px 10px",
};

export const LongDelay = Template.bind({});
LongDelay.args = {
  triggerElement: <TriggerElement>Showing tooltip after one second</TriggerElement>,
  children: <div>Delayed tooltip example</div>,
  padding: "5px",
  delayDuration: 1000
};

export const OnTheLeft = Template.bind({});
OnTheLeft.args = {
  triggerElement: <TriggerElement margin="0 0 0 400px">Some trigger element</TriggerElement>,
  children: <div>Regular tooltip on left side</div>,
  padding: "2px 10px",
  side: 'left'
};

export const OnTheRight = Template.bind({});
OnTheRight.args = {
  triggerElement: <TriggerElement margin="0 0 0 400px">Some trigger element</TriggerElement>,
  children: <div>Regular tooltip on left side</div>,
  padding: "2px 10px",
  side: 'right'
};

export const WithFormattedContent = Template.bind({});
WithFormattedContent.args = {
  triggerElement: <TriggerElement margin="0 0 0 400px">Some trigger element</TriggerElement>,
  children: <FlexBox direction="column">
    <H5 color={Colors.white} margin="0 0 10px">Some heading</H5>
    <P color={Colors.white}>Ut do consequat elit eu laboris et Lorem ut occaecat duis. Lorem adipisicing nisi pariatur elit excepteur.</P>
    <P color={Colors.white} margin="5px 0 0">Tempor non voluptate do est nisi eiusmod labore occaecat veniam duis. Aliqua non Lorem velit pariatur cupidatat velit excepteur aliquip dolor ut do ut.</P>
  </FlexBox>,
  padding: "5px 10px",
  width: "400px",
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  triggerElement: <TriggerElement margin="0 0 0 400px">Some trigger element</TriggerElement>,
  children: <FlexBox direction="column">
    <H5 margin="0 0 10px">Some heading</H5>
    <P>Ut do consequat elit eu laboris et Lorem ut occaecat duis. Lorem adipisicing nisi pariatur elit excepteur.</P>
    <SeparatorLine />
    <P margin="5px 0 0">Tempor non voluptate do est nisi eiusmod labore occaecat veniam duis. Aliqua non Lorem velit pariatur cupidatat velit excepteur aliquip dolor ut do ut.</P>
  </FlexBox>,
  padding: "5px 10px",
  width: "400px",
  backgroundColor: Colors.gray1,
  
};