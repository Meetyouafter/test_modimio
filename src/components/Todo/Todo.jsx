import React from 'react';
import { useDispatch } from 'react-redux';
import trashIcon from '../../../assets/images/trash.svg';
import { completeTodoAction, removeTodoAction } from '../../store/todoReducer';
import './style.scss';

function Todo({ todo }) {
  const dispatch = useDispatch();

  const removeTodo = (id) => dispatch(removeTodoAction(id));
  const completeTodo = (id) => dispatch(completeTodoAction(id));

  return (
    <div className="Todo">
      <li
        id={todo.id}
        onClick={(e) => completeTodo(e.target.id)}
        className={todo.completed ? 'Todo-task completed' : 'Todo-task'}
      >
        {todo.task}
      </li>
      <div className="Todo-buttons">
        <img src={trashIcon} alt="remove todo" onClick={(e) => removeTodo(e.target.id)} id={todo.id} />
      </div>
    </div>
  );
}

export default Todo;
