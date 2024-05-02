import React from 'react';
import SidebarList from '../components/SidebarList';
import { useGlobalContext } from '../context/context';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Sidebar = () => {
    const {isSidebarOpen, setIsSidebarOpen} = useGlobalContext()

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
       
            <button className='sidebar-btn'
                onClick={() => {setIsSidebarOpen(!isSidebarOpen)}}>
                    {isSidebarOpen ? <FaArrowAltCircleLeft className='logo' /> : <FaArrowAltCircleRight className='logo' />}
            </button>
            <div>
              <SidebarList  />
            </div>
    </aside>
  )
}

export default Sidebar