import React, { useState } from "react";
import trashIcon from '../../../assets/images/trash.svg';
import editIcon from '../../../assets/images/pencil.svg';
import './Todo.scss';

function Todo({ todo, remove, update, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleUpdate = e => {
    e.preventDefault();
    update(todo.id, task);
    setIsEditing(!isEditing);
  };

  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={e => setTask(e.target.value)} value={task} type="text" />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li
          id={todo.id}
          onClick={e => toggleComplete(e.target.id)}
          className={todo.completed ? "Todo-task completed" : "Todo-task"}
        >
          {todo.task}
        </li>
        <div className="Todo-buttons">
        <img src={editIcon} onClick={() => setIsEditing(!isEditing)} />
        <img src={trashIcon} onClick={e => remove(e.target.id)} id={todo.id}/>
        </div>
      </div>
    );
  }
  return result;
}

export default Todo;
