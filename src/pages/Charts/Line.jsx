import React from 'react'
import { Header, LineChart } from '../../components'

const Line = () => {
  return (
    <div className='m-4 p-10 bg-white rounded-3xl'>
      <Header text="Inflation Rate" category="Chart"/>
      <LineChart />
    </div>
  )
}

export default Line