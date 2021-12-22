import React, { Props, useRef } from "react";
import Highcharts from "highcharts/highstock";
import { Options } from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface IStockChartProps {
  highcharts: typeof Highcharts;
  options: Options;
}

const MinimalChart = (props: IStockChartProps) => (
  <HighchartsReact
    highcharts={Highcharts}
    constructorType="stockChart"
    options={props.options}
  />
);
export default MinimalChart;
