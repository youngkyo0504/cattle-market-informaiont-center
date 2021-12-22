import React from "react";
import CattleCard from "./CattleCardPresenter";
interface CattleCardContainerProps {
  name: string;
}
const CattleCardContainer = ({ name }: CattleCardContainerProps) => {
  return <CattleCard name={name} />;
};

export default CattleCardContainer;
