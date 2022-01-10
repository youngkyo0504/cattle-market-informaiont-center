import styled, { keyframes } from "styled-components/macro";
import {
  backgroundColor,
  color,
  ColorProps,
  fontSize,
  typography,
  style,
  TypographyProps,
  maxWidth,
  MaxWidthProps,
  SizeProps,
  layout,
  size,
  LayoutProps,
} from "styled-system";
import { Link, NavLink } from "react-router-dom";
import { ILink } from "../../@types/index";
import css from "@styled-system/css";

const StyledHeader = styled.header<ColorProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 1;
`;

const Contents = styled.div<LayoutProps>`
  ${css({
    fontSize: 6,
    maxWidth: 4,
    width: "96%",
    height: "100%",
  })};
  ${layout};
  display: flex;
  //width: 96%;
  //height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  color: transparent;
`;

const Navigations = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li + li {
      margin-left: 30px;
    }
  }
`;

interface HeaderProps {
  links: ILink[];
}
type BaseTextProps = ColorProps & TypographyProps;

const NonStyledLink = styled(NavLink)<BaseTextProps>`
  ${color};
  ${typography};
  text-decoration: none;
  &:visited {
    text-decoration: none !important;
  }
`;

const colorChange = keyframes({
  from: {
    backgroundColor: "red",
  },
  to: {
    background: "white",
  },
});

const StyledLink = styled(NonStyledLink)`
  &.active {
    ${css({
      color: "chart-red",
      fontSize: [1, 4],
    })}
  }
`;

const Header = ({ links }: HeaderProps) => {
  return (
    <StyledHeader>
      <Contents>
        <NonStyledLink fontSize={4} color={"black"} to="/">
          우시장 정보센터
        </NonStyledLink>
        <Navigations>
          <ul>
            {links.map((link) => (
              <li>
                <StyledLink
                  fontSize={[1, 2, 3, 4]}
                  color={"light-silver"}
                  to={link.src}
                  className={({ isActive }) => {
                    return isActive ? "active" : "";
                  }}
                >
                  {link.name}
                </StyledLink>
              </li>
            ))}
          </ul>
        </Navigations>
      </Contents>
    </StyledHeader>
  );
};

export default Header;
