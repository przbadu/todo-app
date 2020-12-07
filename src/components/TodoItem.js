import { useState } from "react";
import IconCross from "../images/icon-cross.svg";

export default function TodoItem({ todo, toggleCompleted, deleteTodo }) {
  const [showDelete, setShowDelete] = useState(false);
  return (
    <div
      className="todo-list-item"
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <label className={`custom-checkbox ${todo.completed ? "active" : ""}`}>
        {todo.title}
        <input
          type="checkbox"
          checked={todo.completed}
          onClick={() => toggleCompleted(todo)}
          onChange={() => toggleCompleted(todo)}
        />
        <span className="checkmark"></span>
      </label>

      {showDelete && (
        <a href="#" className="delete" onClick={() => deleteTodo(todo)}>
          <img src={IconCross} alt="Delete" />
        </a>
      )}
    </div>
  );
}
