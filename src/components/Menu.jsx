import React, { useState } from 'react';
import SidebarList from './SidebarList';
import { useGlobalContext } from '../context/context';
import {links} from '../data';

const Menu = () => {
  const {setIsMenuOpen, isSidebarOpen} = useGlobalContext()
  const [allLinks, setAllLinks] = useState(links)

  const renderedLinks = allLinks.map((link, index) => {
    return <li className='singleLink' key={index}><a href={link.href} target='_blank'>{link.icon}</a></li>
  })
  return (
    <div className='menu-container'>
      <div>
        <SidebarList setIsMenuOpen={setIsMenuOpen} isSidebarOpen={isSidebarOpen} />
      </div>
      <div>
        <ul className='links'>
          {renderedLinks}
        </ul>
      </div>
    </div>
  )
}

export default Menu