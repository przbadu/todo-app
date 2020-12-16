import { useState } from "react";

import { ChangeEvent, FormEvent } from "../types";

interface AddTodoProps {
  onAddTodo: (title: string) => void;
  onToggleAll: () => void;
  toggleAllChecked: boolean;
}

const AddTodo = ({
  onAddTodo,
  onToggleAll,
  toggleAllChecked,
}: AddTodoProps): JSX.Element => {
  const [title, setTitle] = useState("");

  const handleChange = (e: ChangeEvent) => setTitle(e.target.value);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onAddTodo(title);
    setTitle("");
  };

  return (
    <div className="add-todo-container">
      <label className="custom-checkbox">
        <input
          type="checkbox"
          defaultChecked={toggleAllChecked}
          onClick={onToggleAll}
        />
        <span className="checkmark" style={{ top: -2 }}></span>
      </label>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's on your mind..."
          value={title}
          onChange={handleChange}
          autoFocus
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
