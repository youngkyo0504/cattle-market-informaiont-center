import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { backgroundColor, color, ColorProps } from "styled-system";

const ColorDiv = styled.div<ColorProps>`
  ${color};
  position: relative;
  height: 100vh;
`;

const OverFlowHidden = styled.div`
  overflow-y: hidden;
`;
const wheelEventHandler = (event: Event) => {
  event.preventDefault();
  event.stopPropagation();
};
const FullPage = () => {
  useEffect(() => {
    window.addEventListener("wheel", wheelEventHandler, { passive: false });
    window.addEventListener("scroll", (event) => {
      console.log(event);
    });
    return () => {
      window.removeEventListener("wheel", wheelEventHandler);
    };
  });
  return (
    <OverFlowHidden>
      <ColorDiv bg={"red"} />
      <ColorDiv bg={"#2b542c"} />
    </OverFlowHidden>
  );
};

export default FullPage;
