import styled from "styled-components";
import * as RadixTooltip from "@radix-ui/react-tooltip";

import { flexCenterVH } from "../../utils/mixins";
import Colors from "../../utils/colors";

interface PanelStyles {
    backgroundColor?: string;
    color?: string;
    borderRadius?: string;
    padding?: string;
    width?: string;
}

const TooltipContent = styled(RadixTooltip.Content)<{ width: string, padding?: string, backgroundColor?: string; }>`
	${flexCenterVH()}
	display: flex;
	padding: ${props => props.padding || '6px 6px'};
	min-width: 30px;
	max-width: ${props => props.width};
	width: auto;
	min-height: 36px;
	color: ${Colors.white};
	background: ${props => props.backgroundColor ? props.backgroundColor : Colors.evertrustGray};
	border-radius: 6px;
    text-align: center;
	box-shadow: 0px 8px 8px rgba(29, 112, 222, 0.12);
`;

const TooltipArrow = styled(RadixTooltip.Arrow)<{ color?: string }>`
	fill: ${props => props.color || Colors.evertrustGray};
`;

interface Props {
    delayDuration?: number;
	width?: string;
    padding?: string;
	tooltipText?: string;
	children?: React.ReactNode;
	triggerElement: React.ReactNode;
    side?: "left" | "right" | "bottom" | "top";
    backgroundColor?: string;
}

const Tooltip: React.FC<Props> = ({ tooltipText, width, children, triggerElement, delayDuration = 300, padding, side, backgroundColor }) => (
	<RadixTooltip.Provider delayDuration={delayDuration}>
		<RadixTooltip.Root>
			<RadixTooltip.Trigger asChild>
				{triggerElement}
			</RadixTooltip.Trigger>
			<TooltipContent sideOffset={5} width={width || "250px"} padding={padding} side={side} backgroundColor={backgroundColor}>
				{children || tooltipText || ""}
				<TooltipArrow color={backgroundColor} />
			</TooltipContent>
		</RadixTooltip.Root>
	</RadixTooltip.Provider>
);

export default Tooltip;
