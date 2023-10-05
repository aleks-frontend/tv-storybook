import styled from 'styled-components';

export type flexAlignItemsType = 'center' | 'space-between' | 'flex-start' | 'flex-end' | 'stretch';
export type flexJustifyContentType = 'center' | 'space-between' | 'flex-start' | 'flex-end' | 'stretch' | 'space-evenly';

interface FlexBoxProps {
    direction?: 'row' | 'column',
    alignItems?: flexAlignItemsType,
    justifyContent?: flexJustifyContentType,
    margin?: string,
    padding?: string,
    width?: string,
    maxWidth?: string,
    minWidth?: string,
    height?: string,
    minHeight?: string,
    gap?: string,
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse',
    flexGrow?: number,
    flexShrink?: number,
    cursorIsPointer?: boolean
}

export const FlexBox = styled.div<FlexBoxProps>`
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : 'row'};
    align-items: ${props => props.alignItems ? props.alignItems : 'center'};
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
    margin: ${props => props.margin ? props.margin : '0'};
    padding: ${props => props.padding ? props.padding : '0'};
    width: ${props => props.width ? props.width : '100%'};
    max-width: ${props => props.maxWidth ? props.maxWidth : 'none'};
    min-width: ${props => props.minWidth ? props.minWidth : '0'};
    height: ${props => props.height ? props.height : 'auto'};
    min-height: ${props => props.minHeight ? props.minHeight : 'auto'};
    gap: ${props => props.gap ? props.gap : '0'};
    flex-wrap: ${props => props.wrap ? props.wrap : 'wrap'};
    flex: ${props => props.flexGrow ? props.flexGrow : 'unset'};
    ${props => props.flexShrink !== undefined ? `flex-shrink: ${props.flexShrink}` : ''};

    &:hover, &:hover * {
        cursor: ${props => props.cursorIsPointer ? 'pointer' : 'default'};
    }
`;

export const RelativeBox = styled.div`
    position: relative;
`;
