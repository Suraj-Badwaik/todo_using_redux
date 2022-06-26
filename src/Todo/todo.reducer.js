import {
  ADD_TODO_FAILURE,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  DELETE_TODO_ERROR,
  DELETE_TODO_LOADING,
  DELETE_TODO_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  TOGGLE_TODO_ERROR,
  TOGGLE_TODO_LOADING,
  TOGGLE_TODO_SUCCESS,
} from "./todo.action.type";

let initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const todoReducer = (state = initialState, { type, payload }) => {
  // localStorage.setItem('List', JSON.stringify(state.todos))
  // console.log("type",type,"payload",payload);

  switch (type) {
    case GET_TODO_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        todos: payload,
        isLoading: false,
        isError: false,
      };
    }
    case GET_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case ADD_TODO_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ADD_TODO_SUCCESS: {
      let newTodo = [...state.todos, payload];
      return {
        ...state,
        todos: newTodo,
        isLoading: false,
        isError: false,
      };
    }
    case ADD_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case TOGGLE_TODO_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case TOGGLE_TODO_SUCCESS: {
      let newToggledTodo = state.todos.map((item) =>
        item.id === payload.id ? payload : item
      );
      return {
        ...state,
        todos: newToggledTodo,
        isLoading: false,
        isError: false,
      };
    }
    case TOGGLE_TODO_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case DELETE_TODO_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case DELETE_TODO_SUCCESS: {
      let leftTodos = state.todos.filter((item) => item.id !== payload);
      return {
        ...state,
        todos: leftTodos,
        isLoading: false,
        isError: false,
      };
    }
    case DELETE_TODO_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
