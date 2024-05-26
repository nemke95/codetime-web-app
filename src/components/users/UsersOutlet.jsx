import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const UsersOutlet = () => {
  return (
    <div>
       <ul className='users-navlist'>
          <li><NavLink className={(obj)=> obj.isActive ? 'active-link' : null} to='/users' end>Sign Up</NavLink></li>
          <li><NavLink className={(obj)=> obj.isActive ? 'active-link' : null} to='/users/table'>Users table</NavLink></li>
       </ul>
       <Outlet />
    </div>
  )
}

export default UsersOutlet
