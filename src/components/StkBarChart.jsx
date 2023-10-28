import React, { useEffect, useRef } from 'react';

const StkBarChart = ({data}) => {
    const chartRef = useRef(null);
    // Add your license key her


    useEffect(() => {
        const Chart = require('@syncfusion/ej2-charts').Chart;
        const StackingColumnSeries = require('@syncfusion/ej2-charts').StackingColumnSeries;
        const Category = require('@syncfusion/ej2-charts').Category;
        const Tooltip = require('@syncfusion/ej2-charts').Tooltip;
        const Legend = require('@syncfusion/ej2-charts').Legend;

        Chart.Inject(Chart, StackingColumnSeries, Category, Tooltip, Legend);

        const chart = new Chart({
            primaryXAxis: {
                majorGridLines: { width: 0 },
                minorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 },
                interval: 1,
                lineStyle: { width: 0 },
                rangePadding: "10",
                valueType: 'Category'
            },
            //Initializing Primary Y Axis
            primaryYAxis:
            {

                lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
                majorGridLines: { width: 0 },
                minorGridLines: { width: 0 },
                minorTickLines: { width: 0 },
                labelFormat: '{value}k',
            },
            chartArea: {

                border: {
                    width: 0
                }
            },
            //Initializing Chart Series
            series:data,
            //Initializing User Interaction Tooltip
            tooltip: {
                enableAnimation: true,
                enable: true
            },
            height: '350',
            legendSettings: { visible: true, },


        });

        chart.appendTo(chartRef.current);

        return () => {
            chart.destroy(); // Clean up when the component unmounts
        };
    }, [data]);

    return (
        <div>
            <div id="Chart" ref={chartRef} style={{ width: '100%', height: '250px' }}></div>
        </div>
    );
};

export default StkBarChart;
