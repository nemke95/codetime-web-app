import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/context'

const UsersTable = () => {
  const {users, getUsers} = useGlobalContext()

  useEffect( () => {
    getUsers()
  }, [])

  const renderedUsers = users.map( (user) => {
    console.log(user);
    return <div key={user.id}>
      <p>{user.username}</p>
    </div>
  })


  return (
    <div className=''>
      <h1>Users Table</h1>
      <p>to be continued...</p>
      <p>List of users:</p>
      {renderedUsers}
    </div>
  )
}

export default UsersTable