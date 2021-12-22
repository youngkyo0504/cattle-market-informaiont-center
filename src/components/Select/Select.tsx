import React, { useCallback } from "react";
import Select, { StylesConfig } from "react-select";

interface ISelectProps {
  onChange?: () => {};
  options: MyOptionType[];
}

// options에는 select 할 때 사용하는 데이터들을 넣어주면 된다.
const options = [
  { value: "woolsan", label: "울산" },
  { value: "gch", label: "거창" },
];

type IsMulti = false;

type MyOptionType = {
  label: string;
  value: string;
};

const StyledSelect = ({ onChange, options }: ISelectProps) => {
  const selectStyle: StylesConfig<MyOptionType, IsMulti> = {
    container: (provided, { isDisabled }) => {
      return {
        ...provided,
        backgroundColor: isDisabled ? "red" : "blue",
      };
    },
    control: (provided, { isDisabled, isFocused, menuIsOpen }) => {
      return {
        ...provided,
        boxShadow: "none", // 이래야 주위 보더가 사라진다.
      };
    },
  };

  return (
    <>
      <Select
        styles={selectStyle}
        onChange={onChange}
        placeholder={"우시장을 검색하세요"}
        options={options}
      />
    </>
  );
};

export default StyledSelect;
