import React, {useEffect} from "react"
import {
    useDispatch
} from 'react-redux'
import {Link} from 'react-router-dom'
import { toggleTodo } from "../../application/actions/todo";
import useData from "../hooks/useData";
import fetchTodos from '../../application/middlewares/todo'


const ToDoList = () => {
    const dispatch = useDispatch()
    const [isLoading, data, error] = useData()

    if (isLoading) {
        return <b>Loading</b>;
    }

    if (error) {
        return <div>Error</div>;
    }


    const todoJSX = data.map((todo) => <li key={todo.id} className={todo.completed ? 'todo-item completed':'todo-item'} onClick={() => {
        dispatch(toggleTodo(todo.id))
    }}>{todo.title}</li>)

    return <div>
        <Link to="/home">Home</Link>
        <ul>
            {todoJSX}
        </ul>
    </div>

}

export default ToDoList