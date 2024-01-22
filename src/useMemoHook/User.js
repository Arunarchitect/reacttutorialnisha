
import React ,{useState, useMemo} from 'react'
import Usercard from './Usercard'

const User = () => {
    const userList = [
        {id:1, name: "Arun"},
        {id:2, name:'Varun'},
        {id:3, name:'Tarun'},
        {id:4, name:'Karun'}
    ]
    const [user, setUser] =useState(userList);
    const [counter,setCounter] = useState(0);

    const displayList = useMemo(() => user.map(user  => {
        console.log('preparing card...')
        return <Usercard key={user.id} data={user}/>
    }),[user])

    const handleCounter =()=> {
        setCounter(counter => counter+1)
    }

    const setUserDetail = (value) =>  {
        setUser  ([
            ...user,
            {
                id:user.length+1,
                name:value,
            }
        ])
    }
  return (
    <div>
        <h4>useMemoHook</h4>
        <h4>{counter}</h4>
        <button onClick={() => handleCounter()}>Increment</button>
        <hr />
        Enter name:  <input type='text' onBlur={(e) => setUserDetail(e.target.value)} />
        {displayList}
    </div>
  )
}

export default User