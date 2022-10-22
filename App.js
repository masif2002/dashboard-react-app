import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Sidebar, Navbar, Footer, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Editor, Employees, Stacked, Pyramid, Line, Pie, Customers, Kanban, Area, Bar, Financial, ColorMapping, ColorPicker } from './pages';

import './App.css'

const activeMenu = true;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* Main Container */}
        <div className='flex relative dark:bg-main-dark-bg'>

          {/* Setting Button */}
          <div className='fixed right-4 bottom-4'
          style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position='Top'>
              <button type='button' className='text-3xl text-white p-5 hover:drop-shadow-xl hover:bg-light-gray' style={{ background: 'blue', borderRadius: '50%' }}>
                <FiSettings />  
              </button>
            </TooltipComponent>
          </div>

          {/* Sidebar */}
          {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            <Sidebar />
          </div>
          ) : (
          <div className='w-0 dark:bg-secondary-dark-bg'>
            <Sidebar />
          </div>
          )}

          {/* Navigation Bar */}
          <div className={`bg-white dark:bg-secondary-dark-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              {/* <Navbar /> */}
            </div>
          </div>

          {/* Sidebar Elements */}
          <Routes>
            <Route path='/' element={<Ecommerce />} />

            <Route path='/orders' element={<Orders />} />
            <Route path='/employees' element={<Employees />} />
            <Route path='/customers' element={<Customers />} />

            <Route path='/calendar' element={<Calendar />} />
            <Route path='/kanban' element={<Kanban />} />
            <Route path='/editor' element={<Editor />} />
            <Route path='/color-picker' element={<ColorPicker />} />
            
            <Route path='/line' element={<Line />} />
            <Route path='/area' element={<Area />} />
            <Route path='/bar' element={<Bar />} />
            <Route path='/pie' element={<Pie />} />
            <Route path='/financial' element={<Financial />} />
            <Route path='/color-mapping' element={<ColorMapping />} />
            <Route path='/pyramid' element={<Pyramid />} />
            <Route path='/stacked' element={<Stacked />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App 