import React from 'react'

import { Header } from '../components'
import { EditorData } from '../data/dummy'
import { RichTextEditorComponent, Toolbar, Image, Link, HtmlEditor, QuickToolbar, Inject } from '@syncfusion/ej2-react-richtexteditor'

const Editor = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-4 md:p-10 bg-white rounded-3xl'>
      <Header 
        category="App"
        text="Editor"
      />
      <div className='mt-8'>
        <RichTextEditorComponent>
          <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
        </RichTextEditorComponent>
      </div>
    </div>
  )
}

export default Editor