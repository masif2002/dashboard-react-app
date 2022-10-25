import React from 'react'

const Button = ({color, text}) => {
  return (
    <div>
      <button type='button' className='mt-4 rounded-xl p-3 text-white bg-${color}-600 hover:drop-shadow-xl' style={{backgroundColor: color}}>
        {text}
      </button>
    </div>
  )
}

export default Button