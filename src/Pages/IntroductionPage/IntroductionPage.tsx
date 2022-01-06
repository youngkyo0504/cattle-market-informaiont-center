import React, { useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styled, { keyframes } from "styled-components/macro";
import { height } from "styled-system";
import Counting from "./Counting";
import { useInView } from "react-intersection-observer";
const Dd = styled.div`
  height: 100vh;
`;

const Reveal: React.SFC = ({ children }) => (
  <ScrollAnimation
    animateIn={"fadeInUp"}
    animateOut={"fadeOut"}
    duration={1}
    offset={400}
  >
    {children}
  </ScrollAnimation>
);

const Vhdiv = styled.div`
  height: 100vh;
  background-color: #2b542c;
  padding-top: 66.66%;
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
  background-image: url(https://img.29cm.co.kr/campaign/casper/story2/img-9.jpg);
`;

const Other = styled.div`
  height: 100vh;
  background-color: #2b542c;
  padding-top: 66.66%;
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
  background-image: url(https://img.29cm.co.kr/campaign/maycoop/img/pc/img1-7.jpg);
`;
//

const IntroductionPage = () => {
  return (
    <>
      <div>회사 소개 페이지</div>
      <Reveal>안녕</Reveal>
      <Reveal>Hi</Reveal>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut=""
        duration={1}
        delay={0}
      >
        <h1>React Animate On Scroll</h1>
        <h2>Using:</h2>
      </ScrollAnimation>
      <Other />

      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="fadeOut"
        duration={1}
        delay={200}
      >
        <h1>React Animate On Scroll</h1>
        <h2>Using:</h2>
      </ScrollAnimation>

      <Vhdiv />
    </>
  );
};

export default IntroductionPage;
