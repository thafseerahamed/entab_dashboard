/**
 * Sample for Line Series
 */
import * as React from 'react';

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, Legend, DateTime, Tooltip, Highlight } from '@syncfusion/ej2-react-charts';

export let data1 = [{ x: new Date(2012, 6, 11), y: 435 }, { x: new Date(2013, 6, 13), y: 824 }, { x: new Date(2014, 6, 11), y: 287 }, { x: new Date(2015, 6, 11), y: 455 }, { x: new Date(2016, 6, 11), y: 456 }, { x: new Date(2017, 6, 11), y: 377 }, { x: new Date(2018, 6, 11), y: 445 }, { x: new Date(2019, 6, 11), y: 589 }, { x: new Date(2020, 6, 11), y: 670 }];
export let data2 = [{ x: new Date(2012, 6, 11), y: 530 }, { x: new Date(2013, 6, 13), y: 560 }, { x: new Date(2014, 6, 11), y: 590 }, { x: new Date(2015, 6, 11), y: 576 }, { x: new Date(2016, 6, 11), y: 786 }, { x: new Date(2017, 6, 11), y: 903 }, { x: new Date(2018, 6, 11), y: 655 }, { x: new Date(2019, 6, 11), y: 755 }, { x: new Date(2020, 6, 11), y: 765 }];
export let data3 = [{ x: new Date(2012, 6, 11), y: 566 }, { x: new Date(2013, 6, 13), y: 475 }, { x: new Date(2014, 6, 11), y: 430 }, { x: new Date(2015, 6, 11), y: 388 }, { x: new Date(2016, 6, 11), y: 289 }, { x: new Date(2017, 6, 11), y: 765}, { x: new Date(2018, 6, 11), y: 478 }, { x: new Date(2019, 6, 11), y: 687 }, { x: new Date(2020, 6, 11), y: 710 }];

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }
  
  `;
const LineChart = () => {
    const onChartLoad = (args) => {
        let chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    };
    const load = (args) => {
       const selectedTheme = 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).
            replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
        args.chart.primaryXAxis.labelIntersectAction = 'Rotate45';
        args.chart.primaryXAxis.labelFormat = 'EEE';
    };
    return (<div className="control-pane">
            <style>{SAMPLE_CSS}</style>
            <div className="control-fluid">
                <ChartComponent id="charts" height='250px' style={{ textAlign: 'center' ,width:"100%"}} primaryXAxis={{ rangePadding: 'None',valueType: 'DateTime', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, labelFormat: 'y' }} load={load.bind(this)} primaryYAxis={{ rangePadding: 'None', minimum: 0, maximum: 1000, interval: 300, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 } }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} legendSettings={{ enableHighlight: true }}  loaded={onChartLoad.bind(this)}>
                    <Inject services={[LineSeries, DateTime, Legend, Tooltip, Highlight]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={data2} xName="x" fill="#2e94fc" yName="y" name="On Time" width={2} type="Line"  ></SeriesDirective>
                        <SeriesDirective  dataSource={data1} xName="x" yName="y" fill="#f77d71" name="Late" width={2}   type="Line" ></SeriesDirective>
                        <SeriesDirective dataSource={data3} xName="x" yName="y" fill="#fcae1d" name="Absent" width={2} type="Line" ></SeriesDirective>
                       
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>);
};
export default LineChart;