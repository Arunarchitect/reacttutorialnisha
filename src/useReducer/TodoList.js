
import { TODOS_ACTIONS } from "./todos"
import { useContext } from "react"
import TodosContext from "../context/TodosContext"

const TodoList = () => {
  const {todos, dispatch} = useContext(TodosContext);
  return (
    <>
        {todos.map(todo => (
            <li key={todo.id}>{todo.id}-{todo.name}
            <span>
                <button onClick={() => dispatch({type: TODOS_ACTIONS.DELETE_TASK,payload:todo.id})}>
                    Delete
                </button>
            </span>
            </li>
        ))}
    </>
    
  )
}

export default TodoList