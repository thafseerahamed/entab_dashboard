import React, { useEffect, useRef } from 'react';

const MyChart = () => {
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
                        { x: '2014', y: 111.1 },
                        { x: '2015', y: 127.3 },
                        { x: '2016', y: 143.4 },
                        { x: '2017', y: 159.9 },
                        { x: '2018', y: 76.9 },
                        { x: '2019', y: 99.5 },],
                    xName: 'x', width: 2, fill: '#3490fd',
                    yName: 'y', name: 'UK',

                },
                {
                    type: 'StackingColumn',
                    dataSource: [
                        { x: '2014', y: 76.9 },
                        { x: '2015', y: 99.5 },
                        { x: '2016', y: 76.9 },
                        { x: '2017', y: 99.5 },
                        { x: '2018', y: 121.7 },
                        { x: '2019', y: 142.5 }],
                    xName: 'x', width: 2,
                    yName: 'y', name: 'Germany', fill: '#45bdfa',

                },
                {
                    type: 'StackingColumn',
                    dataSource: [
                        { x: '2014', y: 66.1 },
                        { x: '2015', y: 79.3 },
                        { x: '2016', y: 91.3 },
                        { x: '2017', y: 102.4 },
                        { x: '2018', y: 76.9 },
                        { x: '2019', y: 99.5 },],
                    xName: 'x', width: 2,
                    yName: 'y', name: 'France', fill: '#ff8d4e',


                }, {
                    type: 'StackingColumn',
                    dataSource: [
                        { x: '2014', y: 56.1 },
                        { x: '2015', y: 69.3 },
                        { x: '2016', y: 81.3 },
                        { x: '2017', y: 92.4 },
                        { x: '2018', y: 76.9 },
                        { x: '2019', y: 99.5 },],
                    xName: 'x', width: 2,
                    yName: 'y', name: 'France', fill: '#ffb444',


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
            <div id="Chart" ref={chartRef} style={{ width: '35%', height: '250px' }}></div>
        </div>
    );
};

export default MyChart;
