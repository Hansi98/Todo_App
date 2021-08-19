import { ActionTypes } from '../constants/actionTypes';

export const persistTodos = () => ({
  type: ActionTypes.PERSIST_TODOS
});
export const addText = value => ({
  type: ActionTypes.ADD_TEXT,
  payload: value
});
export const addTodo = todo => ({
  type: ActionTypes.ADD_TODO,
  payload: todo
});

export const deleteTodo = key => ({
  type: ActionTypes.DELETE_TODO,
  payload: key
});

export const editTodo = key => ({
  type: ActionTypes.EDIT_TODO,
  payload: key
});

export const editAddTodo = obj => ({
  type: ActionTypes.EDIT_ADD_TODO,
  payload: obj
});

export const deleteAll = () => ({
  type: ActionTypes.DELETE_ALL
});
