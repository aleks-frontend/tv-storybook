import styled from "styled-components";

import { baseTransition, flexCenterVH } from "../../utils/mixins";
import Colors from "../../utils/colors";

const buttonHeight = 38;
const buttonSubHeight = 20;
const transitionDuration = "0.5s";

const getButtonFilter = (variation: string) => {
  if (variation === "primary") {
    return "drop-shadow(0px 4px 16px rgba(29, 112, 222, 0.33))";
  } else if (variation === "secondary") {
    return "drop-shadow(0px 8px 16px rgba(29, 112, 222, 0.26))";
  } else if (variation === "danger") {
    return "drop-shadow(0px 8px 16px rgba(207, 19, 34, 0.26));";
  } else {
    return "none";
  }
};

const getButtonHoverBg = (variation: string) => {
  if (variation === "primary") {
    return "linear-gradient(90deg, #002766 0%, #004EB6 27.08%, #004EB6 72.92%, #002766 100%)";
  } else if (variation === "secondary") {
    return "linear-gradient(90deg, #DFECFD -0.2%, #FAFCFF 29.61%, #FFFFFF 71.44%, #DFECFD 100.2%)";
  } else if (variation === "danger") {
    return "linear-gradient(90deg, #A8071A 0%, #D90611 27.08%, #D90611 72.92%, #A8071A 100%)";
  } else {
    return Colors.blue0;
  }
};

type VariationType = "primary" | "secondary" | "link" | "danger" | "completed";

interface Props {
  variation?: VariationType;
  margin?: string;
  padding?: string;
  width?: string;
  minWidth?: string;
  color?: string;
  position?: string;
  sub?: boolean;
  allowDisabledPointerEvents?: boolean;
  preventShadow?: boolean;
  gap?: string;
  cursor?: string;
}

const Button = styled.button<Props>`
  position: ${(props) => (props.position ? props.position : "relative")};
  ${flexCenterVH()}
  gap: ${(props) => (props.gap ? props.gap : "0")};
  flex-shrink: 0;
  overflow: ${(props) =>
    props.variation === "primary" ||
    props.variation === "danger" ||
    !props.variation
      ? "visible"
      : "hidden"};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0 16px")};
  width: ${(props) => (props.width ? props.width : "auto")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "88px")};
  min-height: ${(props) => (props.sub ? buttonSubHeight : buttonHeight)}px;
  font-family: "Quicksand", sans-serif;
  font-size: ${(props) => (props.sub ? "11px" : "14px")};
  font-weight: 700;
  color: ${(props) =>
    props.color
      ? props.color
      : props.variation === "primary" ||
        props.variation === "danger" ||
        props.variation === "completed" ||
        !props.variation
      ? Colors.white
      : Colors.blue3};
  background: ${(props) =>
    props.variation === "primary" || !props.variation
      ? Colors.blue3
      : props.variation === "secondary"
      ? Colors.white
      : props.variation === "danger"
      ? Colors.red3
      : props.variation === "completed"
      ? Colors.green3
      : "transparent"};
  border: ${(props) =>
    props.variation === "secondary" ||
    props.variation === "primary" ||
    props.variation === "danger" ||
    !props.variation
      ? `3px solid ${
          props.variation === "secondary"
            ? Colors.white
            : props.variation === "danger"
            ? Colors.red3
            : Colors.blue3
        }`
      : "none"};
  border-radius: ${buttonHeight / 2}px;
  filter: ${(props) =>
    props.preventShadow
      ? "none"
      : props.variation
      ? getButtonFilter(props.variation)
      : getButtonFilter("primary")};
  ${baseTransition({ duration: transitionDuration })}

  /* Before pseudo class had to be added because of the gradient transition */
    &::after {
    content: "";
    position: absolute;
    top: -3px;
    right: -3px;
    bottom: -3px;
    left: -3px;
    background: ${(props) =>
      props.variation
        ? getButtonHoverBg(props.variation)
        : getButtonHoverBg("primary")};
    border-radius: ${buttonHeight / 2}px;
    opacity: 0;
    z-index: -1;
    ${baseTransition({ duration: transitionDuration })}
  }

  &:not([disabled]):hover {
    cursor: ${(props) => (props.cursor ? props.cursor : "pointer")};
    border: ${(props) =>
      props.variation !== "link" && props.variation !== "completed"
        ? `3px solid ${
            props.variation !== "danger" ? Colors.blue3 : Colors.red3
          }`
        : "none"};

    ${(props) => props.variation === "link" && `background: ${Colors.blue0};`}

    ${(props) =>
      props.variation !== "link" &&
      `&::after {
            opacity: 1;
        }`}
  }

  &:focus {
    outline: none;
    ${(props) => props.variation === "link" && `background: ${Colors.blue0};`}

    border: ${(props) =>
      props.variation !== "link"
        ? `3px solid ${
            props.variation === "secondary"
              ? Colors.blue3
              : props.variation === "danger"
              ? Colors.red2
              : Colors.blue2
          }`
        : "none"};
  }

  &:active {
    ${(props) =>
      (props.variation === "secondary" || props.variation === "link") &&
      `color: ${Colors.blue5};`}

    ${(props) =>
      (props.variation === "primary" || !props.variation) &&
      `background: ${Colors.blue5};`}

        ${(props) =>
      props.variation === "danger" && `background: ${Colors.red5};`}

        &::after {
      opacity: 0;
    }
  }

  &:disabled {
    ${(props) =>
      (props.variation === "primary" || !props.variation) &&
      `background: ${Colors.gray4};`}
    ${(props) =>
      (props.variation === "primary" || !props.variation) &&
      `border: 3px solid ${Colors.gray4};`}
        pointer-events: ${(props) =>
      props.allowDisabledPointerEvents ? "default" : "none"};
    ${(props) =>
      (props.variation === "secondary" || props.variation === "link") &&
      `color: ${Colors.gray4};`}
    ${(props) =>
      props.variation === "danger" &&
      `
            background: ${Colors.red2};
            border: 3px solid ${Colors.red2};
        `}
  }
`;

export default Button;

// const Button = () => {
//   return <div></div>;
// };

// export default Button;
