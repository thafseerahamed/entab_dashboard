import React, { useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import '../App.css';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const StBarChart = () => {
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
    data: [
      {
        type: "stackedColumn",
        name: "General",
        showInLegend: true,
        yValueFormatString: "#,###k",
        // visible:false,
        color:"#61C766",
        dataPoints: [
          { label: "Jan", y: 14 },
          { label: "Feb", y: 12 },
          { label: "Mar", y: 14 },
          { label: "Apr", y: 13 },
          { label: "May", y: 13 },
          { label: "Jun", y: 13 },
       
        ],
      },
      {
        type: "stackedColumn",
        name: "Marketing",
        showInLegend: true,
        yValueFormatString: "#,###k",
        visible:false,
        dataPoints: [
          { label: "Jan", y: 13 },
          { label: "Feb", y: 13 },
          { label: "Mar", y: 15 },
          { label: "Apr", y: 16 },
          { label: "May", y: 17 },
          { label: "Jun", y: 17 },
     
        ],
      },
      {
        type: "stackedColumn",
        name: "Sales",
        showInLegend: true,
        visible:false,
        yValueFormatString: "#,###k",
        dataPoints: [
          { label: "Jan", y: 13 },
          { label: "Feb", y: 13 },
          { label: "Mar", y: 15 },
          { label: "Apr", y: 15 },
          { label: "May", y: 15 },
          { label: "Jun", y: 15 },
      
        ],
      },
      {
        type: "stackedColumn",
        name: "IT",
        visible:false,
        showInLegend: true,
        color:"#61C766",
        yValueFormatString: "#,###k",
        dataPoints: [
          { label: "Jan", y: 14 },
          { label: "Feb", y: 8 },
          { label: "Mar", y: 6 },
          { label: "Apr", y: 6 },
          { label: "May", y: 5 },
          { label: "Jun", y: 5 },
    
        ],
      },
    ],
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
