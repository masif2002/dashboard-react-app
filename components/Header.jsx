import React from 'react'

const Header = ({category, text}) => {
  return (
    <div>
      <p className='text-gray-400 font-medium'>
        {category}
      </p>
      <p className='text-3xl font-bold tracking-tight'>
        {text}
      </p>
    </div>
  )
}

export default Header