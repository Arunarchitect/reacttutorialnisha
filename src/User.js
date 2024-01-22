import {useState, useEffect } from "react"



const User = () => {
    const [userList,  setUsers] = useState([]);
    const [refresh,setRefresh] = useState(false);

    function getUser(){
        const url = 'https://jsonplaceholder.typicode.com/users';
        return fetch(url)
        .then (data =>data.json())
    }

    useEffect(() => {
        getUser()
        .then(result => setUsers(result))
    },[refresh])
    
    return  <div>
        <h1>User Component</h1>
        <button onClick={() => setRefresh(refresh => !refresh)}>Refresh</button>
        {userList.map(user => <li key={user.id}>{user.name}</li>)}
    </div>
}

export default User