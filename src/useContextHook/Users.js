import React from 'react'
import Detail from './Detail'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

const Users = () => {
  const data = useContext(UserContext)
  console.log(data.userName)
  const name=data.userName
  return (
    <div>
        <h5>Users:{name} </h5>
        <Detail />
    </div>
  )
}

export default Users