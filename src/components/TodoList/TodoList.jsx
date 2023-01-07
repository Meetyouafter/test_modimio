import React from 'react';
import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';
import NewTodoForm from '../TodoForm/TodoForm';
import './style.scss';

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todoList">
      <h1>
        Todo List
        {' '}
        <span>Create a new tascs list</span>
      </h1>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
      <NewTodoForm />
    </div>
  );
}

export default TodoList;
