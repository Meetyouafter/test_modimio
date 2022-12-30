import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    TOOGLE_TODO,
  } from "./types";
import { v4 as uuidv4 } from 'uuid';

  
  export const addNewTodo = todo => {
    return {
      type: ADD_TODO,
      payload: {
        id: uuidv4(),
        title: todo?.title,
        description: todo?.description,
      },
    };
  };

  export const deleteTodo = id => {
    return {
      type: DELETE_TODO,
      id,
    };
  };
  
  export const editTodo = id => {
    return {
      type: EDIT_TODO,
      payload: {
        id: id,
      },
      isEdit: true,
    };
  };
   
  export const toogleTodo = id => {
    return {
      type: TOOGLE_TODO,
      payload: {
        selectedTodoId: id
      }
    }
  };