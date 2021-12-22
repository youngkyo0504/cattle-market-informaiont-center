import React, { useCallback } from "react";
import Select, { SingleValue } from "react-select";

interface mapProps {
  setCattleMarket: React.Dispatch<React.SetStateAction<string>>;
}

const options = [
  { value: "woolsan", label: "울산" },
  { value: "gch", label: "거창" },
];

const MyComponent = () => <Select options={options} />;

const Map = ({ setCattleMarket }: mapProps) => {
  const changeMarketName = useCallback(
    (value: SingleValue<{ value: string; label: string }>) => {
      if (value) {
        setCattleMarket(value.value);
      }
    },
    [setCattleMarket]
  );

  return (
    <>
      <div
        id="myMap"
        style={{
          width: "500px",
          height: "500px",
        }}
      />
      <div>
        <Select
          onChange={changeMarketName}
          placeholder={"우시장을 검색하세요"}
          options={options}
        />
      </div>
    </>
  );
};

export default Map;
