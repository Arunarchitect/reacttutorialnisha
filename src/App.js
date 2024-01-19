import Link from './Link';
import './App.css';
import User from './User';


function App() {
  const users = ['Arun1', 'Arun2']
  
  return (
  <>
    <Link 
      title="data1" 
      content='Validate' 
      users={users} 
    />
    < User
      user="Nisha"
    />
  </>
  );
}

export default App;
