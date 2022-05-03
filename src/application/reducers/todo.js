
import { FETCH_SUCCESS, FETCH_FAILURE, TOGGLE_TODO } from "../actions/todo";


const initialState = {
    todos: [],
    error: null
}
  
  const ToDoReducer = (state = initialState, payload) => {
    
    switch (payload.type) {
      
      case FETCH_SUCCESS: {
        return {
          ...state,
          todos: payload.data,
          error: null
        };
      }
      
      case FETCH_FAILURE: {
        return {
          ...state,
          todos: [],
          error: payload.error
        };
      }
  
      case TOGGLE_TODO: {
        const { todoId } = payload;
        const { todos } = state;
        const todoIndex = todos.findIndex((todo) => todo.id === todoId);
        const currentTodo = todos[todoIndex];
        const newTodo = {
          ...currentTodo,
          completed: !currentTodo.completed
        };
        const newTodos = [
          ...todos.slice(0, todoIndex),
          newTodo,
          ...todos.slice(todoIndex + 1)
        ];
        return {
          ...state,
          todos: newTodos
        };
      }
  
      default:
        return state;
    }
    
  };
  
  export default ToDoReducer;