import React from "react";
import CattleCardContainer from "../CattleCard/CattleCardContainer";

interface cattleCardListProps {
  cattleMarketList: string[];
}

const CattleCardList = ({ cattleMarketList }: cattleCardListProps) => {
  return (
    <section>
      {cattleMarketList.map((cattleMarket) => (
        <CattleCardContainer name={cattleMarket} />
      ))}
    </section>
  );
};

export default CattleCardList;
