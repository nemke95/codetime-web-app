import React, { useState } from 'react';
import { PiRobot } from "react-icons/pi";
import { FaKeyboard } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import { useGlobalContext } from '../context/context';
import { links } from '../data';

const Navbar = () => {
  const {isMenuOpen, setIsMenuOpen, setIsSidebarOpen} = useGlobalContext()
  const [allLinks, setAllLinks] = useState(links)

  const handleOpenMenu = () => {
    setIsSidebarOpen(true)
    setIsMenuOpen(!isMenuOpen)
  }
  const renderedLinks = allLinks.map((link, index) => {
    return <li key={index} className='singleLink'><a href={link.href} target='_blank'>{link.icon}</a></li>
  })

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-title'>
          <PiRobot className='logo'/>
          <h1><i>CodeTime</i></h1>
          <FaKeyboard className='logo' />
        </div>
        <div>
          <ul className='links'>
            {renderedLinks}
          </ul>
        </div>

        <div className={`hamburger-menu ${isMenuOpen ? 'hamburger-rotate' : ''}`} onClick={handleOpenMenu}>
          <TfiMenu className='logo' />
        </div>
    </nav>
    <hr className='hr-line' />
    </>
  )
}

export default Navbar