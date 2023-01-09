import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';
import NewTodoForm from '../TodoForm/TodoForm';
import './style.scss';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const todoFilter = (status) => {
    if (status === 'all') {
      setFilteredTodos(todos);
    } else {
      const newTodos = todos.filter((todo) => todo.completed === status);
      setFilteredTodos(newTodos);
    }
  };

  return (
    <div className="todoList">
      <h1>
        Todo List
        <span>Create a new tasks list</span>
      </h1>
      <ul>
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
      <NewTodoForm todoFilter={todoFilter} />
    </div>
  );
}

export default TodoList;
