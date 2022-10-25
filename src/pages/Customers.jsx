import React from 'react'

import { ColumnsDirective, ColumnDirective, GridComponent, Inject, Page, Toolbar, Edit, Sort, Selection, Filter} from '@syncfusion/ej2-react-grids'

import { Header } from '../components'

import { customersData, customersGrid } from '../data/dummy'

const Customers = () => {
  return (
    <div className='m-3 mt-16 md:m-10 p-3 md:p-10 bg-white rounded-3xl'>
      <Header
      category="Page"
      text="Customers" 
      />
      <div className='mt-10'>
        <GridComponent 
        dataSource={customersData}  
        allowPaging={true} 
        allowSorting={true}
        width="auto"
        toolbar={['Delete']}
        editSettings={{allowEditing: true, allowDeleting: true}}
        >
          <ColumnsDirective>
            {customersGrid.map((item, index) => (
              <ColumnDirective key={index} {...item}
              />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
        </GridComponent>
      </div>
    </div>
  )
}

export default Customers