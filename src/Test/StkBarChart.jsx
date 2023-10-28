import React, { useEffect, useRef } from 'react';

const StkBarChart = () => {
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
                labelFormat: '{value}B',
            },
            chartArea: {

                border: {
                    width: 0
                }
            },
            //Initializing Chart Series
            series: [
                {
                    type: 'StackingColumn',
                    dataSource: [
                        { x: 'June', y: 111.1 },
                        { x: 'July', y: 127.3 },
                        { x: 'August', y: 143.4 },
                        { x: 'Sep', y: 159.9 },
                        { x: 'Oct', y: 76.9 },
                        { x: 'Nov', y: 99.5 },],
                    xName: 'x', width: 2, fill: '#3490fd',
                    yName: 'y', name: 'Product',

                },
                {
                    type: 'StackingColumn',
                    dataSource: [
                        { x: 'June', y: 76.9 },
                        { x: 'July', y: 99.5 },
                        { x: 'Aug', y: 76.9 },
                        { x: 'Sep', y: 99.5 },
                        { x: 'Oct', y: 121.7 },
                        { x: 'Nov', y: 142.5 }],
                    xName: 'x', width: 2,
                    yName: 'y', name: 'Marketing', fill: '#45bdfa',

                },
                {
                    type: 'StackingColumn',
                    dataSource: [
                        { x: 'June', y: 66.1 },
                        { x: 'July', y: 79.3 },
                        { x: 'Aug', y: 91.3 },
                        { x: 'Sep', y: 102.4 },
                        { x: 'Oct', y: 76.9 },
                        { x: 'Nov', y: 99.5 },],
                    xName: 'x', width: 2,
                    yName: 'y', name: 'Sales', fill: '#ff8d4e',


                }, {
                    type: 'StackingColumn',
                    dataSource: [
                        { x: 'June', y: 56.1 },
                        { x: 'July', y: 69.3 },
                        { x: 'Aug', y: 81.3 },
                        { x: 'Sep', y: 92.4 },
                        { x: 'Oct', y: 76.9 },
                        { x: 'Nov', y: 99.5 },],
                    xName: 'x', width: 2,
                    yName: 'y', name: 'Engineering', fill: '#ffb444',


                },
            ],
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
    }, []);

    return (
        <div>
            <div id="Chart" ref={chartRef} style={{ width: '100%', height: '250px' }}></div>
        </div>
    );
};

export default StkBarChart;
