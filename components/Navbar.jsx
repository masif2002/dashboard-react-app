import React, { useEffect }from 'react'

import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'

import avatar from '../data/avatar.jpg' 

import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

const Navbar = () => {

  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();

  const NavButton = ({color, title, customFunc, icon, dotColor}) => (
    <TooltipComponent content={title} className='' position='BottomCenter' >
      <button className=' relative text-lg p-3' type='button' onClick={customFunc} style={{   color:color }}>
        <span style={{ backgroundColor:dotColor }} className='absolute inline-flex rounded-full h-2 w-2 top-2 right-2' />
        {icon}
      </button>
    </TooltipComponent>
  );

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize])

  return (
    
    <div className='flex relative justify-between md:mx-6 p-2'>
      {/* Navbar Icons */}  
      <NavButton title='Menu' icon={<AiOutlineMenu />} customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color={currentColor}/>

      <div className='flex'>
        <NavButton title='Cart' icon={<FiShoppingCart />} customFunc={() => handleClick('cart')} color={currentColor}/>
        <NavButton title='Chat' icon={<BsChatLeft />} customFunc={() => handleClick('chat')} color={currentColor} dotColor="#03C9D7"/>
        <NavButton title='Notifications' icon={<RiNotification3Line />} customFunc={() => handleClick('notification')} color={currentColor} dotColor="#03C9D7" />

        {/* User Profile */}
        <div className='flex p-1 hover:bg-light-gray curser-pointer items-center rounded-lg gap-2' onClick={() => handleClick('userProfile')}>
          <img src={avatar} className='h-8 w-8 rounded-full'/>
          <span className='text-gray-400 text-14'>
            Hi, <span className='font-bold'>Michael</span>
          </span>
          <MdKeyboardArrowDown />
        </div>

        {isClicked.chat && (<Chat />)}
        {isClicked.cart && (<Cart />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}

      </div>

    </div>
  )
}

export default Navbar