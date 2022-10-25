import React from 'react'

import {Category, Chart, ChartComponent, ColumnSeries, Inject, DateTime, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip, Legend } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy' 

const LineChart = () => {
  return (
    <div className='mt-6'>
        <ChartComponent 
          id='charts'
          primaryXAxis={LinePrimaryXAxis}
          primaryYAxis={LinePrimaryYAxis}
          tooltip={{enable: true}}
          chartArea={{ border: {width: 0} }}
          legendSettings={{ background: 'white' }}
          height="420px"
        >
          <Inject services={[ColumnSeries, LineSeries, DateTime, Tooltip, Category, Legend]}/>
          <SeriesCollectionDirective>
            {lineCustomSeries.map((item, index) => 
              <SeriesDirective key={index}  {...item}/>
            )}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
  )
}

export default LineChart