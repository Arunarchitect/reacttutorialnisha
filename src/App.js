import Link from './Link';
import './App.css';

function App() {
  const appName =  "react application"
  const user = {
    name: 'arun'
  }
  const profileValid = false;
  const  handle = () => {
    console.log("Button is clicked")
  }

  return (
  <>
    <h1 id='header' className='test'>lets Learn React</h1>
    <p>Hi {appName} my name is {user.name}</p>
    <p>Is it valid  :{`${profileValid}`}</p>
    <p>{ profileValid ? 'Valid' :"invalid"}</p>
    <button onClick={handle}>HI</button>
    <Link />
  </>
  );
}

export default App;
