import React from "react";
import CattleCardListContainer from "../../components/CattleCardList/CattleCardListContainer";
import MainBannerContainer from "../../components/MainBanner/MainBannerContainer";
import Iframe from "../../components/Iframe/Iframe";
import CalfAnalysisContainer from "../../components/ CalfAnalysis/CalfAnalysisContainer";
const MainPage = () => {
  return (
    <>
      <MainBannerContainer />
      <CattleCardListContainer />
      <CalfAnalysisContainer />
    </>
  );
};

export default MainPage;
