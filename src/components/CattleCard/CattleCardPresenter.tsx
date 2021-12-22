import React from "react";
import {
  borderRadius,
  BorderRadiusProps,
  buttonStyle,
  ButtonStyleProps,
  color,
  ColorProps,
  fontSize,
  MaxWidthProps,
  RequiredTheme,
  space,
  SpaceProps,
  styleFn,
  Theme,
  ThemeValue,
  TypographyProps,
  variant,
} from "styled-system";
import styled from "styled-components/macro";

interface CattleCardPresenterProps {
  name: string;
}

const buttonSize: styleFn = variant({
  prop: "size",
  key: "buttonSizes",
});

type ButtonProps = ColorProps &
  TypographyProps &
  SpaceProps &
  BorderRadiusProps &
  ButtonStyleProps &
  MaxWidthProps;

const Button = styled("button")<ButtonProps>(
  {
    appearance: "button",
    border: 0,
    outline: 0,
  },
  borderRadius,
  buttonStyle,
  space,
  fontSize,

  variant({
    variants: {
      primary: {
        color: "white",
        bg: "black",
      },
      secondary: {
        color: "white",
        bg: "secondary",
      },
    },
  })
);

Button.defaultProps = {
  variant: "large",
};

const CattleCard = ({ name }: CattleCardPresenterProps) => {
  return (
    <>
      <li>{name}</li>
      <Button variant={"primary"}>Hello-World</Button>
    </>
  );
};

export default CattleCard;
