import { css } from 'styled-components';

interface TransitionArgs {
    duration?: string,
    property?: string
}

export const baseTransition = ({
    property = 'all',
    duration = '0.3s'
}: TransitionArgs = {}) => css`
    transition: ${property} ease-in-out ${duration};
`;

export const flexCenterVH = () => css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const flexCenterV = () => css`
    display: flex;
    align-items: center;
`;

export const flexCenterH = () => css`
    display: flex;
    justify-content: center;
`;

export const resetDefaultButtonStyle = () => css`
    font-family: 'Quicksand', sans-serif;
    padding: 0;
    border: none;
    background: none;

    &:hover {
        cursor: pointer;
    }
`;

export const hideScrollbar = () => css`
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
`;
