import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
  ["2018", 1000, 400, 200],
  ["2019", 1170, 460, 250],

];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2019",
  },
  colors:["rgb(53,138,148","rgb(31,11,153)","#188310"]
};

export default function Barchart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="370px"
      data={data}
      options={options}
    />
  );
}
