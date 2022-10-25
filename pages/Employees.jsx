import React from 'react'

import { ColumnsDirective, ColumnDirective, GridComponent, Inject, Page, Search} from '@syncfusion/ej2-react-grids'

import { Header } from '../components'

import { employeesData, employeesGrid } from '../data/dummy'

const Employees = () => {
  return (
    <div className='m-3 mt-16 md:m-10 p-3 md:p-10 bg-white rounded-3xl'>
      <Header
      category="Page"
      text="Employees" 
      />
      <div className='mt-10'>
        <GridComponent 
        dataSource={employeesData} 
        allowPaging={true} 
        allowSorting={true}
        width="auto"
        toolbar={['Search']}
        >
          <ColumnsDirective>
            {employeesGrid.map((item, index) => (
              <ColumnDirective key={index} {...item}
              />
            ))}
          </ColumnsDirective>
          <Inject services={[Search, Page]} />
        </GridComponent>
      </div>
    </div>
  )
}

export default Employees