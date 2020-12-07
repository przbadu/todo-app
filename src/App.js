import { useState, useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import TodoFilter from "./components/TodoFilter";
import Todos from "./components/Todos";

function App() {
  const [theme, setTheme] = useState("dark");
  const [todos, setTodos] = useState([]);
  const [filterKey, setFilterKey] = useState("All");
  const [toggleAllChecked, setToggleAllChecked] = useState(false);

  const addTodo = (title) => {
    setTodos([...todos, { id: Date.now(), title, completed: false }]);
  };

  const toggleAllCompleted = () => {
    const newTodos = todos.map((todo) => {
      todo.completed = !toggleAllChecked;
      return todo;
    });
    setTodos(newTodos);
    setToggleAllChecked(!toggleAllChecked);
  };

  const toggleCompleted = (todo) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((row) => row.id === todo.id);
    newTodos[todoIndex] = {
      ...newTodos[todoIndex],
      completed: !newTodos[todoIndex].completed,
    };
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => {
      if (!todo.completed) return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (todo) => {
    const newTodos = todos.filter((t) => {
      if (t.id !== todo.id) return t;
    });
    setTodos(newTodos);
  };

  return (
    <div className={`container-wrapper ${theme}`}>
      <div className="container">
        <Header
          theme={theme}
          toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <AddTodo
          addTodo={addTodo}
          toggleAllChecked={toggleAllChecked}
          toggleAll={toggleAllCompleted}
        />
        <Todos
          todos={todos}
          toggleCompleted={(todo) => toggleCompleted(todo)}
          filterKey={filterKey}
          deleteTodo={deleteTodo}
        />
        <TodoFilter
          todos={todos}
          filterKey={filterKey}
          setFilterkey={setFilterKey}
          clearCompleted={clearCompleted}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
