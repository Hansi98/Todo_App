import { ActionTypes } from '../constants/actionTypes';

const initState = {
  todos: [],
  text: "",
  selected: undefined
};

const setPersist = todos =>
  window.localStorage.setItem("todos2", JSON.stringify(todos));

export const addTodo = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.PERSIST_TODOS:
      const todos = JSON.parse(window.localStorage.getItem("todos2"));
      return { ...state, todos: todos ? todos : [] };
    case ActionTypes.ADD_TEXT:
      return { ...state, text: action.payload };
    case ActionTypes.ADD_TODO:
      const todos2 = state.todos.concat(action.payload);
      window.localStorage.setItem("todos2", JSON.stringify(todos2));
      return { ...state, todos: todos2, text: "" };
    case ActionTypes.DELETE_TODO:
      const todo3 = state.todos.filter((todo, i) => i !== action.payload);
      setPersist(todo3);
      return {
        ...state,
        todos: todo3
      };
    case ActionTypes.EDIT_TODO:
      return {
        ...state,
        text: state.todos[action.payload],
        selected: action.payload
      };
    case ActionTypes.EDIT_ADD_TODO:
      const todo4 = state.todos.map((todo, i) =>
        i !== action.payload.selected ? todo : action.payload.value
      );
      setPersist(todo4);
      return {
        ...state,
        todos: todo4,
        selected: undefined,
        text: ""
      };
    case ActionTypes.DELETE_ALL:
      setPersist([]);
      return { ...state, todos: [], text: "" };
    default:
      return state;
  }
};
