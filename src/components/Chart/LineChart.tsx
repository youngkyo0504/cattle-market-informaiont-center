import React, { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options: Highcharts.Options = {
  title: {
    text: "",
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      type: "line",
      data: [1, 2, 3],
    },
  ],
  exporting: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  chart: {
    width: 300,
    spacingBottom: 0,
    spacingTop: 0,
    spacingLeft: 0,
    spacingRight: 0,
  },
  xAxis: {
    lineWidth: 0,
    minorGridLineWidth: 0,
    lineColor: "transparent",
    labels: {
      enabled: false,
    },
    minorTickLength: 0,
    tickLength: 0,
    minPadding: 0,
    maxPadding: 0,
  },
  yAxis: {
    lineWidth: 0,
    lineColor: "transparent",
    gridLineColor: "transparent",
    labels: {
      enabled: false,
    },
    title: { text: null },
  },
  navigator: {
    enabled: false,
  },
};

// React supports function components as a simple way to write components that
// only contain a render method without any state (the App component in this
// example).

const LineChart = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType="stockChart"
      options={options}
      ref={chartComponentRef}
      {...props}
    />
  );
};

export default LineChart;
