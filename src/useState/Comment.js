import React,{useState} from 'react'

function Comment () {
    const [title, handleTitle] = useState('Good Morning');
    
    // console.log(obj)
  return (
    <div>
        <h1>{title}</h1>
        <button onClick={() => handleTitle('Good Evening')}>Change title</button>
    </div>
  )
}

export default Comment