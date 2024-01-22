import { useReducer } from "react"
import TodoList from "./TodoList";
import Header from "./Header";
import TodosContext from "../context/TodosContext";


const initialState = [];

export const TODOS_ACTIONS = {
    ADD_TASK: 'add_task',
    DELETE_TASK: 'delete_task',
    RESET_TODOS: 'reset_todos',
}

function reducer(state, action){
    switch(action.type){
        case TODOS_ACTIONS.ADD_TASK: return [
            ...state,
            {
                id: state.length  +1,
                name:action.payload
            }
        ];

        case TODOS_ACTIONS.DELETE_TASK : return state.filter (d => d.id !==action.payload)

        case TODOS_ACTIONS.RESET_TODOS: return init (action.payload)
        
        default: return state;
    }
}

function init(initialState){
    // some logic
    return initialState;
}
const Todos = () => {
    const [todos, dispatch]= useReducer(reducer, initialState, init);
    const data = {
        todos,
        dispatch
    }


    return (
        <TodosContext.Provider value={data}>

            {/* <h4>Todo List {todos.length} </h4> */}
            <Header  />
            Add new Task :
            <input
                type="text"
                onBlur={(e) => {
                    const value = e.target.value;
                    dispatch({ type: TODOS_ACTIONS.ADD_TASK, payload: value });
                    e.target.value = ''; // Set the input value to an empty string on blur
                }}
            />
            <button onClick={()=> dispatch({type:TODOS_ACTIONS.RESET_TODOS, payload:initialState})}>Reset</button>
            <hr />
            <TodoList />
            
        </TodosContext.Provider> 
    )
}

export default Todos