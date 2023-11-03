import styled from 'styled-components';

import Colors from '../../utils/colors';
import { baseTransition, resetDefaultButtonStyle } from '../../utils/mixins';

interface HeadingProps {
    margin?: string,
    color?: string,
    weight?: number,
    textAlign?: string
}

export const H1 = styled.h1<HeadingProps>`
    margin: ${props => props.margin ? props.margin : '0'};
    font-size: 40px;
    font-weight: ${props => props.weight ? props.weight : 500};
    line-height: 1.2em;
    color: ${props => props.color ? props.color : Colors.evertrustGray};
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
`;

export const H2 = styled.h2<HeadingProps>`
    margin: ${props => props.margin ? props.margin : '0'};
    font-size: 34px;
    font-weight: ${props => props.weight ? props.weight : 500};
    line-height: 1.176em;
    color: ${props => props.color ? props.color : Colors.evertrustGray};
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
`;

export const H3 = styled.h3<HeadingProps>`
    margin: ${props => props.margin ? props.margin : '0'};
    font-size: 28px;
    font-weight: ${props => props.weight ? props.weight : 700};
    line-height: 1em;
    color: ${props => props.color ? props.color : Colors.evertrustGray};
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
`;

export const H4 = styled.h4<HeadingProps>`
    margin: ${props => props.margin ? props.margin : '0'};
    font-size: 24px;
    font-weight: ${props => props.weight ? props.weight : 700};
    line-height: 1.166em;
    color: ${props => props.color ? props.color : Colors.evertrustGray};
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
`;

export const H5 = styled.h5<HeadingProps>`
    margin: ${props => props.margin ? props.margin : '0'};
    font-size: 22px;
    font-weight: ${props => props.weight ? props.weight : 700};
    line-height: 1.181em;
    color: ${props => props.color ? props.color : Colors.evertrustGray};
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
`;

export const H6 = styled.h6<HeadingProps>`
    margin: ${props => props.margin ? props.margin : '0'};
    font-size: 16px;
    font-weight: ${props => props.weight ? props.weight : 700};
    line-height: 1.375em;
    color: ${props => props.color ? props.color : Colors.evertrustGray};
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
`;

interface ParagraphProps {
    margin?: string,
    weight?: '400' | '500' | '700',
    color?: string,
    align?: 'left' | 'center' | 'right',
    alignSelf?: string,
    cursor?: string,
    textTransform?: string,
    fontSize?: string,
}

export const P = styled.p<ParagraphProps>`
    margin: ${props => props.margin ? props.margin : '0'};
    font-size: ${props => props.fontSize ? props.fontSize : '14px'};
    font-weight: ${props => props.weight ? props.weight : '500'};
    line-height: 1.429em;
    color: ${props => props.color ? props.color : Colors.evertrustGray};
    text-align: ${props => props.align ? props.align : 'left'};
    text-transform: ${props => props.textTransform ? props.textTransform : 'none'};
    align-self: ${props => props.alignSelf ? props.alignSelf : 'auto'};

    &:hover {
        cursor: ${props => props.cursor ? props.cursor : 'default'};
    }

    a { color: ${Colors.blue3}; }
`;

export const LABEL = styled.span<{ color?: string, fontWeight?: number, margin?: string, align?: string }>`
    margin: ${props => props.margin ? props.margin : '0'};
    font-size: 11px;
    font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
    line-height: 1.4545em;
    color: ${props => props.color ? props.color : Colors.evertrustGray};
    text-align: ${props => props.align ? props.align : 'left'};
`;

export const SUBHEADING = styled.label<{ margin?: string, color?: string, align?: string, width?: string }>`
    margin: ${props => props.margin ? props.margin : '0'};
    width: ${props => props.width ? props.width : 'auto'};
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.color ? props.color : Colors.evertrustGray};
    text-align: ${props => props.align ? props.align : 'left'};
    ${baseTransition()}
`;

export const CUSTOMLABEL = styled.div<{ color?: string, margin?: string }>`
    margin: ${props => props.margin ? props.margin : '0'};
    font-size: 11px;
    font-weight: 500;
    color: ${props => props.color ? props.color : Colors.gray5};
`;

export const UL = styled.ul`
    padding-left: 25px;
`;

export const CODE = styled.code<{ backgroundColor?: string }>`
    font-size: 14px;
    color: ${props => props.color ? props.color : Colors.white};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : Colors.black};
    padding: 10px;
    width: 600px;
    border-radius: 10px;
    margin: 12px;
    text-align: left;
`
export const TEXTLINK = styled.button<{ color?: string, margin?: string }>`
    ${resetDefaultButtonStyle()}
    margin: ${props => props.margin ? props.margin : '0'};
    padding: 10px;
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.color ? props.color : Colors.gray5};
    background-color: transaprent;
    border: 1px solid #FFFFFF;

    &:hover {
        cursor: pointer;
      }
`;