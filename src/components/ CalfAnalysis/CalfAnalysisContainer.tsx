import React, { ReactEventHandler } from "react";
import styled from "styled-components/macro";
import Iframe from "../Iframe/Iframe";

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const CalfAnalysisContainer = () => {
  return (
    <>
      <FlexContainer>
        <Iframe src={"/iframe/kpn.html"} flexNumber={2} />
        <Iframe src={"/iframe/kpn.html"} flexNumber={3} />
      </FlexContainer>
    </>
  );
};

export default CalfAnalysisContainer;
