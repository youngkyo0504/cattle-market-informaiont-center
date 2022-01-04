import React from "react";
import styled from "styled-components";
import TrendGraph from "./TrendGraph";
import LineArticle from "../../components/LineArticle/LineArticle";
import priceRank from "../../datas/priceRank";
import executionRanking from "../../datas/executionRanking";

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
const TrendPage = () => {
  return (
    <TrendMain>
      <LeftSide>
        <GraphContainer>
          <TrendGraph />
          <TrendGraph />
        </GraphContainer>
        <GraphContainer>
          <TrendGraph />
          <TrendGraph />
        </GraphContainer>
      </LeftSide>
      <RightSide>
        <LineArticle data={[priceRank, executionRanking]} />
        <LineArticle data={[executionRanking]} />
      </RightSide>
    </TrendMain>
  );
};

export default TrendPage;
