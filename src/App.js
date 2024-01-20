// import Link from './Link';
import './App.css';
// import User from './User';
// import Comment from './useState/Comment';
// import Loading from './useState/Loading';
// import UserForm from './useState/UserForm';
import Users from './useState/Users';


function App() {
  // const users = ['Arun1', 'Arun2']
  
  return (
  <>
    <h1 style={{textAlign: 'center'}}>useState Hook inn react</h1>
    <Users/>
    {/* <Loading /> */}
    {/* <Link 
      title="data1" 
      content='Validate' 
      users={users} 
    />
    < User
      user="Nisha"
    /> */}
    
  </>
  );
}

export default App;
