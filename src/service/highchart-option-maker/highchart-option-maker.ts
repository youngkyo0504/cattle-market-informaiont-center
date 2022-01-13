import { Options } from "highcharts";

export default interface HighchartOptionMaker {
  getData(): Options;
}
