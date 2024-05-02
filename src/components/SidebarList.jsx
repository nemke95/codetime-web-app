import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { useGlobalContext } from '../context/context';

const SidebarList = () => {
  const {isSidebarOpen, setIsMenuOpen} = useGlobalContext()
  return (
    <div>
        <ul className='project-list' onClick={() => {setIsMenuOpen(false)}}>
            <li><NavLink className={(obj)=>obj.isActive ? "activeLink" : null} to='/'>{isSidebarOpen ? <div className='sidebar-list-content'>{<FaHome className='sidebar-icon' />} Home </div> : <div> <FaHome className='sidebar-icon' /></div>}</NavLink></li>
            <li><NavLink className={(obj)=>obj.isActive ? "activeLink" : null} to='/virtualassistant'>{isSidebarOpen ? <div className='sidebar-list-content'>{<MdSupportAgent className='sidebar-icon' />} Assistant</div> : <div> <MdSupportAgent className='sidebar-icon' /> </div>}</NavLink></li>
            <li><NavLink className={(obj)=>obj.isActive ? "activeLink" : null} to='/users'>{isSidebarOpen ? <div className='sidebar-list-content'>{<FiUsers className='sidebar-icon' />} Users</div> : <div> <FiUsers className='sidebar-icon' /> </div>}</NavLink></li>
        </ul>
    </div >
  )
}

export default SidebarList