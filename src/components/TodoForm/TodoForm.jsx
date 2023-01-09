import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodoAction } from '../../store/todoReducer';
import './style.scss';

function NewTodoForm({ todoFilter }) {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const addNewTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      task: todo,
      completed: false,
    };
    dispatch(addTodoAction(newTodo));
    setTodo('');
  };

  return (
    <>
      <form className="newTodoForm" onSubmit={addNewTodo}>
        <input
          value={todo}
          required
          onChange={(e) => setTodo(e.target.value)}
          id="task"
          type="text"
          name="task"
          placeholder="Write your todo here"
        />
        <button className="btn btn-primary btn-add" type="submit">Add new todo</button>
      </form>
      <button
        type="button"
        className="btn btn-primary btn-filter"
        onClick={() => todoFilter(false)}
      >
        Active
      </button>
      <button
        type="button"
        className="btn btn-primary btn-filter"
        onClick={() => todoFilter(true)}
      >
        Complete
      </button>
      <button
        type="button"
        className="btn btn-primary btn-filter"
        onClick={() => todoFilter('all')}
      >
        All
      </button>
    </>
  );
}

export default NewTodoForm;
