import React from 'react'

import { Button } from '../components'
import { earningData } from '../data/dummy'
import { GoPrimitiveDot } from 'react-icons/go'

import { SparkLine, Stacked } from '../components'
import { SparklineAreaData } from '../data/dummy'

import { useStateContext } from '../contexts/ContextProvider'

const Ecommerce = () => {

  const {currentColor} = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">

        {/* Hero Pattern */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full lg:w-80 p-8 pt-9 m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div>
            <p className='text-gray-400 font-bold'>Earnings</p>
            <span className='text-2xl'>$63,986</span>
            <Button 
              text="Download"
              color={currentColor}
            />
          </div>
        </div>
        
        {/* Cards */}
        <div className='flex m-3 justify-center gap-1 items-center'>
          {earningData.map((item) => (
          <div className='p-5 shadow-sm rounded-lg bg-white dark:bg-secondary-dark-bg dark:text-white' key={item.title}>
            <button type='button' style={{backgroundColor: item.iconBg, color: item.iconColor}} className='rounded-full text-3xl mb-2 p-4 hover:drop-shadow-lg'> 
            {item.icon} 
            </button>
            <p>
              <span className='font-semibold'>{item.amount}</span>{' '}
              <span className={`text-xs text-${item.pcColor}`}>{item.percentage}</span> 
            </p>
            <p className='text-gray-400 text-sm mt-1'>
              {item.title}
            </p>
            
          </div>))}
        </div>

        
      </div>

      {/* Revenue Section */}
      <div className='flex justify-center'>
        <div className='bg-white w-780 rounded-xl dark:bg-secondary-dark-bg'>
          
          <div className='flex flex-wrap justify-between items-center p-5'>
            <p className='font-semibold mx-2 dark:text-white'>
              Revenue Updates
            </p>
            <div className='flex gap-6'>
              <p className='flex items-center gap-1 text-gray-700 dark:text-white'>
                <GoPrimitiveDot />
                <span>Expenses</span>
              </p>
              <p className='flex items-center text-green-500 gap-1'>
                <GoPrimitiveDot />
                <span >Budget</span>
              </p>
            </div>
          </div>
          
          <div className='flex flex-wrap justify-center my-10'>

            {/* Left */}
            <div className='border-r-2 px-8  dark:text-white'>
              {/* Budget */}
              <div>
                <p className='mt-2 text-3xl font-semibold'>
                  <span>$93,738</span> <span className='ml-1 text-xs bg-green-500 rounded-full text-white p-1.5'>23%</span>
                </p> 
                <p className='mt-1.5 text-sm font-normal text-gray-500'>Budget</p>
              </div>
              {/* Expenses */}
              <div className='mt-8'>
                <p className='text-3xl font-semibold'>
                  $48,487
                </p>
                <p className='mt-1.5 text-sm font-normal text-gray-500'>Expense</p>
              </div>
              {/* Chart */}
              <div className='mt-5'>
                <SparkLine 
                  id='sparkline'
                  height='80px'
                  width='250px'
                  dataSource={SparklineAreaData}
                  type='Line'
                  color={currentColor}
                />
              </div>
              {/* Button */}
              <div className='mt-5'>
                <Button 
                  color={currentColor}
                  text="Download Report"
                />
              </div>
            </div>

            {/* Right */}
            <div className='ml-8'>
              <Stacked 
                height="360px"
                width="320px"
              />
            </div>
          </div>
          

        </div>
      </div>



    </div>
  )
}

export default Ecommerce