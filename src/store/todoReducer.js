import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, FILTER_TODO, SHOW_ALL, SHOW_COMPLETED, SHOW_DOING } from './types';

const initialState = {
  todos: [],
  visibilityFilter: SHOW_ALL,
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
    case FILTER_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.completed === action.payload),
      };
    default:
      return state;
  }
};

const addTodoAction = (payload) => ({ type: ADD_TODO, payload });
const removeTodoAction = (payload) => ({ type: REMOVE_TODO, payload });
const completeTodoAction = (payload) => ({ type: COMPLETE_TODO, payload });
const filterTodo = (payload) => ({ type: FILTER_TODO, payload });

export { addTodoAction, removeTodoAction, completeTodoAction, filterTodo };
export default todoReducer;
