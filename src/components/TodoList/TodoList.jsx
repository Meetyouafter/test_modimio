import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo.jsx";
import NewTodoForm from "../NewTodoForm/NewTodoForm.jsx";
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from "../../redux/counterSlice.js";
import './TodoList.scss';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filtered, setFiltered] = useState(todos)

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch();

  const todoser = useSelector(state => state.todo.tasks)

  useEffect(() => {
    setFiltered(todos)
  }, [todos])

  const create = newTodo => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
    setFiltered([...todos, newTodo]);
  };

  const update = (id, updtedTask) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setFiltered(updatedTodos)
  };

  const toggleComplete = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setFiltered(updatedTodos)

  };

  const todosList = filtered.map(todo => (
    <Todo
      toggleComplete={toggleComplete}
      update={update}
      remove={id => setTodos(todos.filter(todo => todo.id !== id))}
      key={todo.id}
      todo={todo}
      setFiltered={setFiltered}
    />
  ));

  return (
    <div className="TodoList">
      <h1>
        Todo List <span>Create a new tascs list {todoser[0].text}</span>
      </h1>
      <ul>{todosList}</ul>
      <NewTodoForm createTodo={create} todos={todos} setTodos={setTodos} setFiltered={setFiltered} />



      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount())}>Increment by amount</button>

      <span>{todoser[0].text}</span>



    </div>
  );
}

export default TodoList;
