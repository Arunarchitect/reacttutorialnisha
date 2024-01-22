import React from 'react'
import TodosContext from '../context/TodosContext'
import { useContext } from 'react'

const Header = () => {
    const {todos} = useContext(TodosContext);

  return (
    <div>
        <h4>Todos : {todos.length}</h4>
    </div>
  )
}

export default Header