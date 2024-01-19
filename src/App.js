import Link from './Link';
import './App.css';

function App() {
  const users = ['Arun1', 'Arun2']
  
  return (
  <>
    <Link title="data1" content='Validate' users={users} />
    <Link title="data2" content='c2' users={users}   />
    <Link  title="data3" />


  </>
  );
}

export default App;
