import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {

  const { activeMenu, setActiveMenu, screenSize, setScreenSize, currentColor} = useStateContext(true);
  // const activeMenu = true;

  const activeLink = 'flex hover:bg-slate-100 gap-5 items-center mt-4 m-2 px-4 py-2 rounded-lg text-white text-md';
  const normalLink = 'flex hover:bg-slate-100 gap-5 items-center mt-4 m-2 px-4 py-2 rounded-lg text-md  text-gray-700 dark:text-gray-200 dark:hover:text-black dark:hover:bg-white dark:bg-secondary-dark-bg';

  const closeSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }
  
  return (
    <div className='pb-10 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto'>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link 
            to='/'
            onClick={closeSideBar}
            className='flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
          >
            <SiShopware/>
            <span> Shoppy </span>
          </Link>
          <TooltipComponent content='Menu' position='BottomCenter'>
            <button type='button' 
            onClick={() => setActiveMenu((prevActiveMenu) => {!prevActiveMenu})}
            className='text-xl rounded-full mt-4 p-3 block hover:text-gray-700 mr-4 md:hidden'>
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className='mt-10 ml-3'>
          {links.map((item) => (
            <div key={item.title}>
            <p className='text-gray-400 mt-4 uppercase tracking-wide'>
              {item.title}
            </p>
            {item.links.map((link) => (
              <NavLink
              to={`/${link.name}`}
              key={link.name}
              onClick={closeSideBar}
              className={({isActive}) => isActive ? activeLink : normalLink }
              style={({isActive}) => ({
                backgroundColor: isActive ? currentColor : ''
              })}
              >
                <p>
                  {link.icon}
                </p>
                <span className='capitalize'>
                  {link.name}
                </span>
              </NavLink>
            ))}
            </div>
      ))}
        </div>
      </>)}
      
    </div>
  )
}

export default Sidebar