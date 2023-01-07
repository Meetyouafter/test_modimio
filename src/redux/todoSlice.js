import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [
      {id: 1, text: 'Todonnnnnnnnnnnnnn', complete: false}
    ],
  },
  reducers: {
    add: state => {
    },
    delete: state => {
    },
    edit: state => {
    },
    complete: state => {
    },
  },
});

const todoReducer = todoSlice.reducer;

export const { increment, decrement, incrementByAmount} = todoSlice.actions;

export default todoReducer;
