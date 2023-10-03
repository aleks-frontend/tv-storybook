import { ReactNode } from "react";
import styled from "styled-components";

export enum buttonVariations {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large"
}

const ButtonMain = styled.button<{ backgroundColor: string; variation: buttonVariations }>`
  appearance: none;
  border: none;
  margin: 0;
  padding: 0;
  background: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  outline: none;
  background-color: ${(props) => props.backgroundColor};
  padding: ${props => props.variation === buttonVariations.LARGE ? "20px" : props.variation === buttonVariations.MEDIUM ? "10px" : "5px;"};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

interface Props {
  backgroundColor: string;
  variation: buttonVariations;
  children: ReactNode;
}

const Button: React.FC<Props> = ({ backgroundColor, children, variation }) => {
  return <ButtonMain backgroundColor={backgroundColor} variation={variation}>{children}</ButtonMain>;
};

export default Button;
