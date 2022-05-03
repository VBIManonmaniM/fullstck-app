import {combineReducers} from 'redux'
import TodoReducer from "./todo";
import UIReducer from "./ui";

export default combineReducers({
    todos: TodoReducer,
    ui: UIReducer
})
