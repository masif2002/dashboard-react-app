import React from 'react'

import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'

import { Header } from '../components'
import { themeColors } from '../data/dummy'

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}

const ColorPicker = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-4 md:p-10 bg-white rounded-3xl'>
      <Header 
        category="App"
        text="ColorPicker"
      />
      <div className='mt-8 text-center'>
        <div id="preview"/>
        <div className='flex flex-wrap gap-16 justify-center items-center'>
          {/* Inline Palette */}
          <div className='flex flex-col items-center space-y-8'>
            <p className='text-2xl font-semibold'>Inline Palette</p>
            <ColorPickerComponent mode="Palette" modeSwitcher={false}  inline={true} showButtons={false} change={change}/>
          </div>
          {/* Inline Picker */}
          <div className='flex flex-col items-center space-y-8'>
            <p className='text-2xl font-semibold'>Inline Picker</p>
            <ColorPickerComponent modeSwitcher={false} inline={true} showButtons={false} change={change}/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ColorPicker