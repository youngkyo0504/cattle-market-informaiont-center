// components/Layout/Header/Header.tsx
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 100px;
  margin-top: auto;
  background-color: #dde0ea;
`;

const Contents = styled.div`
  width: 96%;
  max-width: 1100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 20px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Contents>
        <Title>안녕하세요</Title>
      </Contents>
    </StyledFooter>
  );
};

export default Footer;
