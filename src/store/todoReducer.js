/* eslint-disable default-param-last */
import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from './types';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

const addTodoAction = (payload) => ({ type: ADD_TODO, payload });
const removeTodoAction = (payload) => ({ type: REMOVE_TODO, payload });
const completeTodoAction = (payload) => ({ type: COMPLETE_TODO, payload });

export { addTodoAction, removeTodoAction, completeTodoAction };
export default todoReducer;
