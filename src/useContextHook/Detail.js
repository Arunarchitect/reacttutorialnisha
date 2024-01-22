import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Detail = () => {
  const {updateName} =  useContext(UserContext)
  
  return (
    <div>
      <h6>Details</h6>
      <button onClick={() => updateName("Arun Mr")}>Update Name</button>
    </div>
  )
}

export default Detail