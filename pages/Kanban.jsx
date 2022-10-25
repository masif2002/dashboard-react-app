import React from 'react'

import { Header } from '../components'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban'

import { kanbanData, kanbanGrid } from '../data/dummy'

const Kanban = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-4 md:p-10 bg-white rounded-3xl'>
      <Header 
        category="App"
        text="Kanban"
      />
      <div className='mt-8'>
        <KanbanComponent 
          id='kanban'
          keyField='Status'
          dataSource={kanbanData}
          cardSettings={{ contentField: "Summary", headerField: "Id" }} 
        >
          <ColumnsDirective>
            {kanbanGrid.map((item, index) => (
              <ColumnDirective key={index} {...item}/>
            ))}
          </ColumnsDirective>
        </KanbanComponent>
      </div>
    </div>
  )
}

export default Kanban