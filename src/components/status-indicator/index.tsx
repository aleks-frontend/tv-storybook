import styled from 'styled-components';

import { taskStatus } from '../../utils/enums';
import Colors from '../../utils/colors';

const getStatusData = (status: number, criteria: 'color' | 'label') => {
    const isColor = criteria === 'color';

    switch (status) {
        case taskStatus.BLOCKED:
            return isColor ? Colors.red3 : 'Blocked';
        case taskStatus.TODO:
            return isColor ? Colors.green : 'To do';
        case taskStatus.ONGOING:
            return isColor ? Colors.orange : 'Ongoing';
        case taskStatus.BEINGASSESSED:
            return isColor ? Colors.gray : 'Being assessed';
        case taskStatus.DONE:
            return isColor ? Colors.gray : 'Done';
        default:
            return isColor ? Colors.gray : '';
    }
};

const StatusIndicatorMain = styled.div`
    display: flex;
    align-items: center;
`;

const StatusIndicatorLabel = styled.div<{ status: number }>`
    font-size: 12px;
    font-weight: 700;
    color: ${props => getStatusData(props.status, 'color')};
`;

const StatusIndicatorIcon = styled.div<{ status: number }>`
    margin-left: 5px;
    width: 13px;
    height: 13px;
    background: ${props => props.status ? getStatusData(props.status, 'color') : Colors.gray};
    border-radius: 50%;
`;

interface Props {
    status: number,
    count?: number
}

const StatusIndicator: React.FC<Props> = ({ status, count }) => {
    return (
        <StatusIndicatorMain>
            <StatusIndicatorLabel status={status}>
                {count} {getStatusData(status, 'label')}
            </StatusIndicatorLabel>
            <StatusIndicatorIcon status={status} />
        </StatusIndicatorMain>
    );
};

export default StatusIndicator;
