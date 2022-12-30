/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.scss';

const NewTodoForm = ({ createTodo, todos, setFiltered }) => {
  const [todo, setTodo] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      task: todo,
      completed: false
    };
    createTodo(newTodo);
    setTodo('');
  };

  const todoFilter = status => {
    if (status === 'all') {
      setFiltered(todos)
    } else {
      let newTodos = todos.filter(todo => todo.completed === status)
      setFiltered(newTodos)
    }
  }

  return (
    <>
    <form className="newTodoForm" onSubmit={handleSubmit}>
      <input
        value={todo}
        onChange={e => setTodo(e.target.value)}
        id="task"
        type="text"
        name="task"
        placeholder="Write your todo here"
      />
      <button>Add new todo</button>
    </form>
  <button type="button" className="btn btn-primary btn-filter" onClick={() => todoFilter(false)}>Active</button>
  <button type="button" className="btn btn-primary btn-filter" onClick={() => todoFilter(true)}>Complete</button>
  <button type="button" className="btn btn-primary btn-filter" onClick={() => todoFilter('all')}>All</button>
    </>
  );
}

export default NewTodoForm;
