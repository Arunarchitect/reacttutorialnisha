import './App.css';
import {useState} from 'react';
import User from './User';


function App() {
  const [counter, setCounter] = useState(0)
  
  return (
  <div className='App'>
    <h1>Counter {counter}</h1>
    <button onClick={()=>setCounter(value => value+1)}>+</button>
    { counter<5 && <User counter={counter} />}
  </div>
  );
}

export default App;
