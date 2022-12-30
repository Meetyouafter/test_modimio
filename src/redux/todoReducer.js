/* eslint-disable no-case-declarations */
import {
    ADD_TODO,
    DELETE_TODO,
    TOOGLE_TODO,
    EDIT_TODO,
  } from "./types";
import { v4 as uuidv4 } from 'uuid';
  
  const initialState = {
    todos: [
      {
        id: uuidv4(),
        task: "TodoList 1",
        completed: false
      },
      {
        id: uuidv4(),
        task: "TodoList 2",
        completed: false
      },
    ],
    isEdit: false,
    editTodoId: "",
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        const { id, title, description } = action.payload;
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: id,
              title: title,
              description: description,
              isCompleted: false,
              isPending: true,
            },
          ],
          isEdit: action.isEdit,
        };
      case DELETE_TODO:
        const newTodoList = state.todos.filter(item => item.id != action.id);
        return {
          ...state,
          todos: newTodoList,
        };
  
      case EDIT_TODO:
        const editTodo = action.payload;
        let newEditTodo = state?.todos?.find(item => item?.id === editTodo?.id);
        return {
          ...state,
          isEdit: action.isEdit,
          editTodo: newEditTodo,
        };
  
      case TOOGLE_TODO:
        const { selectedTodoId } = action.payload;
        let allTodos = [];
  
        selectedTodoId.forEach(id => {
          allTodos = state.todos.filter(todo => {
            return todo.id !== id;
          });
        });
  
        return {
          ...state,
          todos: [...allTodos],
          isEdit: false,
        };
  
      default:
        return state;
    }
  };
  export default todoReducer;