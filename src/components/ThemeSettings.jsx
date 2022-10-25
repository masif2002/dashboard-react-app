import React from 'react'

import { MdOutlineCancel } from 'react-icons/md'
import { themeColors } from '../data/dummy'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { BsCheck } from 'react-icons/bs'
import { useStateContext } from '../contexts/ContextProvider'

const ThemeSettings = () => {

  const {themeBar, setThemeBar, currentColor, setColor, currentMode, setMode} = useStateContext(true);

  return (
  
    <div className='bg-half-transparent w-screen fixed top-0 right-0' style={{zIndex: 1000}}>
      {themeBar && (
        <div className='bg-white float-right h-screen w-400 dark:bg-[#484B52] dark:text-gray-200'>
        
        <div className='m-4 p-5'>

          {/* Header */}
          <div className='flex justify-between items-center'>
            <p className='font-semibold text-xl'>Settings</p>
            <button type='button'
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%'}}
            className='text-2xl p-2 hover:bg-light-gray hover:drop-shadow-xl'
            onClick={() => {setThemeBar(false )}}
            >
              <MdOutlineCancel />
            </button>
          </div>
          {/* Theme Options */}
          <div className='border-t-1 border-color mt-3'>
            <p className='font-semibold text-lg mt-4'>Theme Options</p>
            <div className='mt-3'>
              <input 
                type={'radio'}
                id="light"
                className='cursor-pointer'
                name='theme'
                value="Light"
                checked={currentMode === 'Light'}
                onChange={setMode}
              />
              <label className='ml-2' htmlFor='light'>Light</label>
            </div>
            <div className='mt-2'>
              <input 
                type={'radio'}
                id="dark"
                className='cursor-pointer'
                name='theme'
                value="Dark"
                checked={currentMode === 'Dark'}
                onChange={setMode}          
              />
              <label className='ml-2' htmlFor='dark'>Dark</label>
            </div>
          </div>
          {/* Theme Colors */}
          <div className='border-t-1 border-color mt-4'>
            <p className='font-semibold text-lg mt-4'>Theme Colors</p>
            <div className='flex gap-3 mt-3'>
              {themeColors.map((item) => (
                <TooltipComponent key={item.name} content={item.name} position="TopCenter">
                  <button className='rounded-full h-10 w-10' 
                  style={{backgroundColor: item.color}}
                  onClick={() => setColor(item.color)}
                  >
                    <BsCheck className={`ml-2 text-2xl text-white ${currentColor == item.color ? 'block' : 'hidden'}`}/>
                  </button>
                </TooltipComponent>
              ))}
            </div>
          </div>
        </div>
        
      </div>
      )}
      
    </div>
    
  )
}

export default ThemeSettings