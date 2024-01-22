import React from 'react'
import Users from './Users'
import UserContext from '../context/UserContext'
import { useState } from 'react'

const UsersDashboard = () => {

  const [user, setUsers] = useState("Arun")
  const users = {
    userName:user,
    updateName: setUsers
  }
  return (
    <UserContext.Provider value={users}>
        <h4>useContextHook</h4>
        
        <Users />
    </UserContext.Provider>
  )
}

export default UsersDashboard