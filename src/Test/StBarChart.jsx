import React, { useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import '../App.css';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const StBarChart = ({data}) => {
  const [chart, setChart] = useState(null);

  const toggleDataSeries = (e) => {
    const dataSeries = e.dataSeries;
    if (dataSeries.visible === undefined || dataSeries.visible) {
      dataSeries.visible = false;
    } else {
      dataSeries.visible = true;
    }
    chart.render();
  };

  const options = {
    animationEnabled: true,
    height:300,
    width :300,
    title: {
      text: "Operating Expenses of ACME",
      fontFamily: "verdana",
      fontSize: 20
    },
    axisY: {
      title: "in Eur",
      includeZero: true,
      prefix: "€",
      suffix: "k",
    },
    toolTip: {
      shared: true,
      reversed: true,
    },
    legend: {
      verticalAlign: "bottom",
      horizontalAlign: "center",
      reversed: true,
      cursor: "pointer",
      itemclick: toggleDataSeries,
    },
    data:data
  };

  return (
    <div>
      <CanvasJSChart
        options={options}
        onRef={(ref) => setChart(ref)}
      />
    </div>
  );
};

export default StBarChart;
