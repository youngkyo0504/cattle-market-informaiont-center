import React from "react";
import Highcharts from "highcharts";
import MinimalChart from "./MinimalChart";
import minimalData from "../../datas/minimalData";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 29px 18px;
`;

const ChartContainer = () => {
  return (
    <Wrapper>
      <MinimalChart highcharts={Highcharts} options={minimalData} />
    </Wrapper>
  );
};

export default ChartContainer;
