import React, { useState } from "react";
import styled from "styled-components";
import TrendGraph from "./TrendGraph";
import LineArticle from "../../components/LineArticle/LineArticle";
import priceRank from "../../datas/priceRank";
import executionRanking from "../../datas/executionRanking";
import LineChart from "../../components/Chart/LineChart";
import minimalData from "../../datas/minimalData";
import ChartContainer from "../../components/Chart/ChartContainer";
import HighchartCowOptionMaker from "../../service/highchart-option-maker/highchart-cow-option-maker";

const LeftSide = styled.div`
  display: flex;
  max-width: 990px;
  width: 100%;
  flex-direction: column;
`;

const TrendMain = styled.div`
  display: flex;
`;
const RightSide = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
  width: 100%;
  flex-direction: column;
`;
const GraphContainer = styled.div`
  display: flex;
  max-width: 990px;
  width: 100%;
  margin-bottom: 10px;
`;
const highcahrtCowOptionMaker = HighchartCowOptionMaker.getInstance();
const cowStockOptions = highcahrtCowOptionMaker.getData();

const TrendPage = ({ data }: any) => {
  return (
    <TrendMain>
      <LeftSide>
        <GraphContainer>
          <TrendGraph data={minimalData} />
          <TrendGraph data={minimalData} />
        </GraphContainer>
        <GraphContainer>
          <TrendGraph data={minimalData} />
          <TrendGraph data={cowStockOptions} />
        </GraphContainer>
        <GraphContainer>
          <LineChart />
        </GraphContainer>
      </LeftSide>
      <RightSide>
        <LineArticle data={[priceRank, executionRanking]} />
        <LineArticle data={[executionRanking]} />
      </RightSide>
      <ChartContainer data={cowStockOptions} />
    </TrendMain>
  );
};

export default TrendPage;
