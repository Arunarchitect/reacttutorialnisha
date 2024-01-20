import React,{useState} from 'react'

function Users ()  {
  const usersList = [
    {id:1, name:'Arun'},
    {id:2, name: 'Rahul'},
  ];

  const [users, setUsers] = useState(usersList);
  function updateUserList (newUser){
    setUsers([
      ...users,
      {
        id:users.length+1,
        name: newUser,
      }
    ]);
  }
  return (
    <>
      <h3>UseState with Array</h3>
      <form action="">
        <label>
          AddUser:
          <input type="text" name='name' onBlur={(e) => updateUserList(e.target.value)} />
        </label>
      </form>
      <p>{JSON.stringify(users)}</p>
    </>
    
  )
}

export default Users