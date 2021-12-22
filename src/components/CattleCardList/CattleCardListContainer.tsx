import React from "react";
import CattleCardList from "./CattleCardListPresenter";
import { cattleMarketList } from "../../datas";

const CattleCardListContainer = () => {
  return <CattleCardList cattleMarketList={cattleMarketList} />;
};

export default CattleCardListContainer;
