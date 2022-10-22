import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy'


const Sidebar = () => {
  const activeMenu = true;

  return (
    <div className='ml-3 pb-10 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto'>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link 
            to='/'
            onClick={ () => {}}
            className='flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
          >
            <SiShopware/>
            <span> Shoppy </span>
          </Link>
          <TooltipComponent content='Menu' position='BottomCenter'>
            <button type='button' 
            onClick={() => {}}
            className='text-xl rounded-full mt-4 p-3 block md:hidden hover:text-gray-700'>
              <MdOutlineCancel />
            </button>
          </TooltipComponent>

          <div>
            {links.map((item) => 
              <div>
              {item.title}
              </div>
            )}
          </div>
          
        </div>
      </>)}
      
    </div>
  )
}

export default Sidebar