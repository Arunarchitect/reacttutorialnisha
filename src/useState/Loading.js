import React,{useState} from 'react'

function Loading ()  {
    const [isLoading, setLoading]= useState(true);
    
  return (
    <>
        <h3>UseState Hook with Boolena type</h3>
        <button onClick={() => setLoading((prevState)=> !prevState)}>Toggle Loading</button>
        {isLoading ? <p>Loading...</p> : <h3>Data is in front of you</h3>}    
    </>
  )
}

export default Loading