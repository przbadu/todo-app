import { useState } from "react";
import { ITodo } from "../App";
import IconCross from "../images/icon-cross.svg";

interface TodoItemProps {
  todo: ITodo;
  toggleCompleted: (todo: ITodo) => void;
  deleteTodo: (todo: ITodo) => void;
}

const TodoItem = ({
  todo,
  toggleCompleted,
  deleteTodo,
}: TodoItemProps): JSX.Element => {
  const [showDelete, setShowDelete] = useState<boolean>(false);

  return (
    <div
      className="todo-list-item"
      onMouseEnter={(): void => setShowDelete(true)}
      onMouseLeave={(): void => setShowDelete(false)}
    >
      <label className={`custom-checkbox ${todo.completed ? "active" : ""}`}>
        {todo.title}
        <input
          type="checkbox"
          checked={todo.completed}
          onClick={(): void => toggleCompleted(todo)}
          onChange={(): void => toggleCompleted(todo)}
        />
        <span className="checkmark"></span>
      </label>

      {showDelete && (
        <a href="#" className="delete" onClick={(): void => deleteTodo(todo)}>
          <img src={IconCross} alt="Delete" />
        </a>
      )}
    </div>
  );
};

export default TodoItem;
