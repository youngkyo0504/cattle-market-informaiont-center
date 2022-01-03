import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components/macro";

const Dd = styled.div`
  height: 100vh;
`;

const Reveal: React.SFC = ({ children }) => (
  <ScrollAnimation
    animateIn={"fadeInUp"}
    animateOut={"fadeOut"}
    duration={1}
    // offset={400}
  >
    {children}
  </ScrollAnimation>
);

const IntroductionPage = () => {
  return (
    <>
      <div>회사 소개 페이지</div>
      <Reveal>안녕</Reveal>
      <Reveal>Hi</Reveal>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="fadeOut"
        duration={1}
        delay={0}
        // initiallyVisible={true}
      >
        <h1>React Animate On Scroll</h1>
        <h2>Using:</h2>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="fadeOut"
        duration={1}
        delay={20}
        // initiallyVisible={true}
      >
        <h1>React Animate On Scroll</h1>
        <h2>Using:</h2>
      </ScrollAnimation>
    </>
  );
};

export default IntroductionPage;
