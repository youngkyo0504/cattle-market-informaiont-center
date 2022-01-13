import styles from "./Page.module.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import TrendPage from "./TrendPage/TrendPage";
import IntroductionPage from "./IntroductionPage/IntroductionPage";
import MarketsPage from "./MarketsPage/MarketsPage";
import CattlePage from "./CattlePage/CattlePage";
import styled from "styled-components";
import HighchartCowOptionMaker from "../service/highchart-option-maker/highchart-cow-option-maker";

const ContentContainer = styled.main`
  max-width: 1400px;
  margin: auto;
  padding-top: 80px;
  min-height: calc(100vh - 100px);
`;

const Page = () => {
  const highcahrtCowOptionMaker = HighchartCowOptionMaker.getInstance();
  console.log(highcahrtCowOptionMaker);
  console.log(1);
  const cowStockOptions = highcahrtCowOptionMaker.getData();
  console.log(2);
  return (
    <ContentContainer>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/introduction" element={<IntroductionPage />} />
        <Route path="/cattle" element={<CattlePage />} />
        <Route path="/trends" element={<TrendPage data={cowStockOptions} />} />
        <Route path="/markets" element={<MarketsPage />} />
      </Routes>
    </ContentContainer>
  );
};

export default Page;
