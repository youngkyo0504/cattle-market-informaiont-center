import carcassPrices from "./heifer.json";
import Highcharts, { ColorString, Options } from "highcharts";
import { IPriceData } from "../@types";

// Todo
// Legacy code 변경해야됨
export interface cowData {
  // 타입을 다시설정한다.
  areaData: (
    | number
    | Highcharts.PointOptionsObject
    | [string | number, number | null]
    | null
  )[];
  lineData: (
    | number
    | Highcharts.PointOptionsObject
    | [string | number, number | null]
    | null
  )[];
}

const getCowStockOptions = ({ areaData, lineData }: cowData): Options => {
  return {
    plotOptions: {
      series: {
        stickyTracking: false, // 마우스가 계속 따라가는 것
        states: {
          inactive: {
            opacity: 1,
          },
          hover: {
            enabled: false,
            halo: {
              opacity: 1,
            },
          },
        },
      },
      area: {
        gapSize: 100,
        connectNulls: true, // null인 값들 모두 연결할지 말지
        // enableMouseTracking: false,
        stickyTracking: false,

        states: {
          hover: {
            opacity: 1,
            enabled: false,
            halo: {
              opacity: 1,
            },
          },
        },
      },
    },
    yAxis: [
      {
        crosshair: false,
        // startOnTick: true,
        // minRange: 900,
        // minRange: 900,
        // maxRange: 3000,
        // range: 1600,
        // 데이터의 범위들 , 이 값대로 안될 수 있다. 여러가지 값에 영향을 받는다.
        // floor: 3295, // 축의 최솟값으로 될 때 허용되는 가장 작은 값
        // softMin: 3200,
        // minThe zoomed range to display when only defining one or none of min or max. For example, to show the latest month, a range of one month can be set.
        //
        //     Defaults to undefined.
        // min: 3000,
        // max: 5000,
        range: 2000,
        lineWidth: 0,
        minorGridLineWidth: 0,

        lineColor: "transparent",
        gridLineColor: "transparent",
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        // minorTickLength: 0,
        // tickLength: 0,
        minPadding: 0.3,
        maxPadding: 0.1,
      },
    ],
    credits: { enabled: false },
    rangeSelector: {
      labelStyle: { display: "none" },
      inputEnabled: false,
      buttonPosition: {
        align: "right",
      }, //버튼의 위치
      allButtonsEnabled: false,
      enabled: false,
    },
    xAxis: {
      lineWidth: 0,
      minorGridLineWidth: 0,
      lineColor: "transparent",
      labels: {
        enabled: false,
      },
      title: {
        text: null,
      },
      crosshair: false,
      minorTickLength: 0,
      tickLength: 0,
      minPadding: 0,
      maxPadding: 0,
    },
    tooltip: {
      // headerFormat: '<span style="font-size:10px">{series}</span><table>',
      // pointFormat:
      //   '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      //   '<td style="padding:0"><b>{point.y:.f} 천원</b></td></tr>',
      // footerFormat: "</table>",
      shared: true,
      useHTML: true,
      animation: false,
      formatter: function () {
        if (this.points) {
          return this.points.reduce(function (s, point) {
            return (
              s +
              '<br/><span style="color:' +
              point.color +
              ';">\u25CF ' +
              point.series.name +
              "</span> " +
              ": <b>" +
              point.y +
              " 천원</b>"
            );
          }, "<b>" + new Date(this.x).toISOString().slice(0, 10) + "</b>");
        }
      },
      // "<br/>" + point.series.name + ": " + point.y + "천원";
      // }, "<b>" + new Date(this.x).toISOString().slice(0, 10) + "</b>");
      enabled: true,
      xDateFormat: "%y-%m-%y",
      split: false,
    },
    chart: {
      width: 272, //전체 차트 넓이를나타낸다.
      height: 112,
      // width: 1024,
      // height: 720,

      borderColor: "#c8c8c8",
      borderWidth: 0.5,
      spacingBottom: 0,
      spacingTop: 0,
      spacingLeft: 0,
      spacingRight: 0,
    },

    navigator: { enabled: false },
    scrollbar: { enabled: false },
    series: [
      {
        data: areaData, //lastyear
        lineWidth: 1,
        type: "area", //가격이 밑에 남는 것 색깔이 중요한듯..
        gapSize: 5,
        opacity: 0.5,
        states: {
          inactive: {
            opacity: 0.5, // 다른 것이 포커싱되어도 0.5로 opacity동일하게 한다.
          },
        },
        showInNavigator: false,
        color: "rgba(192,192,192,0.85)",
        name: "작년 송아지 가격",
        id: "cattle",
        // name: "송아지 가격",
        // id: "cattle",
        // description: "소 가격",
        animation: {
          duration: 1000,
        },
        findNearestPointBy: "xy",
        selected: true,
        // enableMouseTracking: false,
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, "rgba(240, 241, 242)"],
            [1, "rgba(240, 241, 242,0)"],
          ],
        },
      },
      {
        data: lineData, //this year
        // enableMouseTracking: false,
        lineWidth: 1,
        showCheckbox: true,
        type: "line",
        // showInNavigator: true,
        color: "#edacb1",
        name: "송아지 가격",
        id: "cattle",
        description: "소 가격",
        animation: {
          duration: 1000,
        },
        states: {
          hover: { enabled: false },
        },
      },
    ],
  };
};

export default getCowStockOptions;
