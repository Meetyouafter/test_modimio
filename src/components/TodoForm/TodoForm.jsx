import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodoAction, filterTodo } from '../../store/todoReducer';
import './style.scss';

function NewTodoForm({ todoFilter }) {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

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

  const allTodoCounter = todos.length;

  const completeTodoCounter = todos.reduce((acc, el) => {
    if (el.completed) acc += 1;
    return acc;
  }, 0);

  const activeTodoCounter = todos.reduce((acc, el) => {
    if (!el.completed) acc += 1;
    return acc;
  }, 0);

  return (
    <>
      <form className="newTodoForm" onSubmit={addNewTodo}>
        <input
          value={todo}
          required
          maxLength={30}
          onChange={(e) => setTodo(e.target.value)}
          id="task"
          type="text"
          name="task"
          placeholder="Write your todo here (not more 30 symbols)"
        />
        <button className="btn btn-primary btn-add" type="submit">Add new todo</button>
      </form>
      <button
        type="button"
        className="btn btn-primary btn-filter"
        onClick={() => todoFilter('all')}
      >
        {`All tasks (${allTodoCounter})`}
      </button>
      <button
        type="button"
        className="btn btn-primary btn-filter"
        onClick={() => todoFilter(false)}
      >
        {`Active tasks (${activeTodoCounter})`}
      </button>
      <button
        type="button"
        className="btn btn-primary btn-filter"
        onClick={() => dispatch(filterTodo(true))}
      >
        {`Completed tasks (${completeTodoCounter})`}
      </button>
    </>
  );
}

export default NewTodoForm;
