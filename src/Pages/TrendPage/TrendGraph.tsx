import React from "react";
import ChartContainer from "../../components/Chart/ChartContainer";
import styled from "styled-components";

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  background: #fff;
  box-shadow: 2px 2px 4px #dee1e7;
`;
const TrendGraphHead = styled.div`
  padding: 21px 29px;
  display: flex;
  justify-content: space-between;
`;
const TrendGraphName = styled.div`
  font-weight: bold;
`;
const TrendGraphTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
const TrendGraphDesc = styled.div`
  color: #666;
  font-size: 12px;
`;
const TrendGraphIndex = styled.div``;
const TrendGraphIndexDesc = styled.div`
  font-size: 12px;
`;
const TrendGraphChangeDown = styled.div`
  color: #f48399;
  text-align: right;
`;
const TrendGraphIndexArrow = styled.span``;
const TrendGraphIndexPercent = styled.span`
  padding-left: 10px;
`;
const TrendGraph = () => {
  return (
    <GraphContainer>
      <TrendGraphHead>
        <TrendGraphTitle>
          <TrendGraphName>UBHD</TrendGraphName>
          <TrendGraphDesc>송아지 가격 정보</TrendGraphDesc>
        </TrendGraphTitle>
        <TrendGraphChangeDown>
          <TrendGraphIndex>10,861.92</TrendGraphIndex>
          <TrendGraphIndexDesc>
            <TrendGraphIndexArrow>▾ 52.67</TrendGraphIndexArrow>
            <TrendGraphIndexPercent>-0.98%</TrendGraphIndexPercent>
          </TrendGraphIndexDesc>
        </TrendGraphChangeDown>
      </TrendGraphHead>
      <ChartContainer />
    </GraphContainer>
  );
};

export default TrendGraph;
