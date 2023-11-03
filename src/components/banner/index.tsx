import styled from 'styled-components';
import { FaExclamationTriangle } from 'react-icons/fa';

import { FlexBox } from '../styled/flex-box';
import { P } from '../styled/texts';

import Colors from '../../utils/colors';

const BannerMain = styled(FlexBox)<{ backgroundColor: string }>`
    gap: 8px;
    padding: 0 16px;
    height: 36px;
    border-radius: 12px;
    background-color: ${props => props.backgroundColor};
`;

interface Props {
    backgroundColor?: string;
    iconColor?: string;
    FaIcon?: React.ElementType;
    children: React.ReactNode;
    textAlignment?: 'left' | 'center' | 'right';
}

const Banner: React.FC<Props> = ({ backgroundColor = Colors.warningBanner, iconColor = Colors.gold4, FaIcon, children, textAlignment = 'left' }) => {
    return (
        <BannerMain backgroundColor={backgroundColor} justifyContent={textAlignment === 'center' ? 'center' : textAlignment === 'left' ? 'flex-start' : 'flex-end'}>
            {FaIcon ? <FaIcon color={iconColor} /> : <FaExclamationTriangle color={iconColor} />}
            <P>{children}</P>
        </BannerMain>
    );
};

export default Banner;
