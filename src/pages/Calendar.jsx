import React from 'react'

import { Header } from '../components'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule'

import { scheduleData } from '../data/dummy'

const Calendar = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-4 md:p-10 bg-white rounded-3xl'>
      <Header 
        category="App"
        text="Calendar"
      />
      <div className='mt-8'>
        <ScheduleComponent 
          eventSettings={{dataSource: scheduleData}}
          selectedDate={new Date(2021, 0, 11)}
          height={'650px'}
        >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    </div>
  )
}

export default Calendar
