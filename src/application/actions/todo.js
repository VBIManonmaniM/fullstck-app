export const FETCH_TODO = "FETCH_TODO";

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const FETCH_FAILURE = "FETCH_FAILURE";

export const TOGGLE_TODO = "CHECK_TODO";

export const fetchTodo = () => {
  return {
    type: FETCH_TODO
  };
};

export const fetchSuccess = (todos) => {
  return {
    type: FETCH_SUCCESS,
    data: todos
  };
};

export const fetchFailure = (error) => {
  return {
    type: FETCH_SUCCESS,
    data: null,
    error
  };
};

export const toggleTodo = (todoId) => {
  return {
    type: TOGGLE_TODO,
    todoId
  };
};
