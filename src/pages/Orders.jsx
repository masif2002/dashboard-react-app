import React from 'react'

import { ColumnsDirective, ColumnDirective, Filter, GridComponent, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids'

import { Header } from '../components'

import { ordersData, ordersGrid } from '../data/dummy'
import { ColumnSizeInfo } from '@syncfusion/ej2/documenteditor'
import { PageSettings } from '@syncfusion/ej2/treegrid'

const Orders = () => {
  return (
    <div className='m-3 mt-16 md:m-10 p-3 md:p-10 bg-white rounded-3xl overflow-hidden'>
      <Header
      category="Page"
      text="Orders" 
      />
      <div className='mt-10'>
        <GridComponent 
        dataSource={ordersData} 
        allowPaging={true} 
        allowSorting={true}
        width="auto"
        >
          <ColumnsDirective>
            {ordersGrid.map((item, index) => (
              <ColumnDirective key={index} {...item}
              />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter, Group]} />
        </GridComponent>
      </div>
    </div>
  )
}

export default Orders