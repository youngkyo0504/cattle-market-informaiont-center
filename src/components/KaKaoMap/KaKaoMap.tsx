import React, { useCallback } from "react";
import Select, {
  ControlProps,
  MenuProps,
  SingleValue,
  StylesConfig,
} from "react-select";
import { cattleMarket } from "../../datas";
import { StylesProps } from "styled-system";
import { CSSObject, CSSProperties } from "styled-components";
import StyledSelect from "../Select/Select";

interface mapProps {
  cattleMarketName: string;
  changeMarket: any;
}

// options에는 select 할 때 사용하는 데이터들을 넣어주면 된다.
const options = [
  { value: "woolsan", label: "울산" },
  { value: "gch", label: "거창" },
];

const customControlStyles: CSSProperties = {
  color: "white",
  borderColor: "pink",
};
const Map = ({ cattleMarketName, changeMarket }: mapProps) => {
  return (
    <>
      <div
        id="myMap"
        style={{
          width: "500px",
          height: "500px",
        }}
      ></div>
      <div>
        <h2> {cattleMarket[cattleMarketName].title} </h2>
        <StyledSelect options={options} onChange={changeMarket} />
      </div>
    </>
  );
};

export default Map;
