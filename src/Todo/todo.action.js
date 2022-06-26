//todo app
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

export const getTodosLoading = () => ({ type: GET_TODO_LOADING });

export const getTodosSuccess = (payload) => ({
  type: GET_TODO_SUCCESS,
  payload,
});
export const getTodosFailure = () => ({
  type: GET_TODO_FAILURE,
});

export const addTodosLoading = () => ({ type: ADD_TODO_LOADING });

export const addTodosSuccess = (payload) => ({
  type: ADD_TODO_SUCCESS,
  payload,
});
export const addTodosFailure = () => ({
  type: ADD_TODO_FAILURE,
});

export const toggleTodosLoading = () => ({ type: TOGGLE_TODO_LOADING });

export const toggleTodosSuccess = (payload) => ({
  type: TOGGLE_TODO_SUCCESS,
  payload,
});
export const toggleTodosFailure = () => ({ type: TOGGLE_TODO_ERROR });


export const deleteTodosLoading = () => ({ type: DELETE_TODO_LOADING });

export const deleteTodosSuccess = (payload) => ({
  type: DELETE_TODO_SUCCESS,
  payload,
});
export const deleteTodosFailure = () => ({ type: DELETE_TODO_ERROR });


