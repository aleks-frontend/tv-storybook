import styled from "styled-components";
import { FaExclamationTriangle } from "react-icons/fa";

import { FlexBox } from "../styled/flex-box";
import { P } from "../styled/texts";

import Colors from "../../utils/colors";

const BannerMain = styled(FlexBox)<{ backgroundColor: string }>`
    gap: 12px;
    flex-wrap: nowrap;
    padding: 8px 16px;
    min-height: 36px;
    border-radius: 12px;
    background-color: ${props => props.backgroundColor};

    .icon {
        flex-shrink: 0;
    }
`;

interface Props {
    backgroundColor?: string;
    iconColor?: string;
    FaIcon?: React.ElementType;
    children: React.ReactNode;
    textAlignment?: 'left' | 'center' | 'right';
    maxWidth?: string;
}

const Banner: React.FC<Props> = ({ backgroundColor = Colors.warningBanner, iconColor = Colors.gold4, FaIcon, children, textAlignment = 'left', maxWidth = '100%' }) => {
    return (
        <BannerMain backgroundColor={backgroundColor} justifyContent={textAlignment === 'center' ? 'center' : textAlignment === 'left' ? 'flex-start' : 'flex-end'} maxWidth={maxWidth}>
            {FaIcon ? <FaIcon className="icon" color={iconColor} /> : <FaExclamationTriangle color={iconColor} className="icon" />}
            <P>{children}</P>
        </BannerMain>
    );
};

export default Banner;
