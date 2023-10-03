import { ReactNode } from "react";
import styled from "styled-components";

type directionType = 'column' | 'row';

const StackContainer = styled.div<{
  spacing: number;
  direction: directionType;
  wrap: boolean;
}>`
  display: flex;
  gap: ${(props) => props.spacing * 0.25}rem;
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  flex-direction: ${(props) => props.direction};
`;

interface Props {
  children: ReactNode;
  spacing: number;
  direction: directionType;
  wrap: boolean;
}

const Stack: React.FC<Props> = ({ wrap, direction, spacing, children }) => {
  return (
    <StackContainer spacing={spacing} direction={direction} wrap={wrap}>
      {children}
    </StackContainer>
  );
};

export default Stack;
