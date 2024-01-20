import React,{useState} from 'react'

function Theme ()  {
    const [darkTheme, setDarkTheme] = useState(false);

    const theme = {
        darkTheme: {
            backgroundColor:'gray',
            color:'white',
            padding:'20px'
        },
        lightTheme: {
            backgroundColor:'green',
            color:'white',
            padding:'20px'
        }
    }

  return (
    <>
        Enable Dark Theme
        <input
        type='checkbox'
        checked={darkTheme}
        onChange={()=> setDarkTheme(prevTheme => !prevTheme)} 
        />
        <div style={darkTheme ? theme.darkTheme : theme.lightTheme}>This is a theme Page</div>
    </>
    
  )
}

export default Theme