import { useState } from "react";

export default function AddTodo({ addTodo, toggleAllChecked, toggleAll }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    if (e.charCode === 13 && e.target.value) {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <div className="add-todo-container">
      <form>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            defaultChecked={toggleAllChecked}
            onClick={() => toggleAll()}
          />
          <span className="checkmark"></span>
        </label>
      </form>

      <input
        type="text"
        placeholder="What's on your mind..."
        value={title}
        onKeyPress={handleSubmit}
        onChange={handleChange}
        autoFocus
      />
    </div>
  );
}
