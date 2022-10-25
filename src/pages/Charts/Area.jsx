import React from 'react'

import {Category, ChartComponent, SplineAreaSeries, Inject, DateTime, AreaSeries, SeriesCollectionDirective, SeriesDirective, Tooltip, Legend } from '@syncfusion/ej2-react-charts'
import { areaPrimaryXAxis, areaPrimaryYAxis, areaCustomSeries } from '../../data/dummy' 
import { Header } from '../../components'

const Area = () => {
  return (
  <div className='m-4 p-10 bg-white rounded-3xl'>
    <Header text="Inflation Rate" category="AreaChart"/>
    <div className='mt-6 w-full'>
        <ChartComponent 
          id='charts'
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          tooltip={{enable: true}}
          chartArea={{ border: {width: 0} }}
          legendSettings={{ background: 'white' }}
          height="420px"
        >
          <Inject services={[SplineAreaSeries, AreaSeries, DateTime, Tooltip, Category, Legend]}/>
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => 
              <SeriesDirective key={index}  {...item}/>
            )}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
  </div>
    
  )
}

export default Area