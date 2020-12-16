import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import TodoFilter from "./components/TodoFilter";
import Todos from "./components/Todos";

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

function App(): JSX.Element {
  const [theme, setTheme] = useState<string>("dark");
  const [todos, setTodos] = useState<ITodo[]>([]);
  // TODO: replace filterKey options with enum
  const [filterKey, setFilterKey] = useState<string>("All");
  const [toggleAllChecked, setToggleAllChecked] = useState<boolean>(false);

  const addTodo = (title: string): void => {
    setTodos([...todos, { id: Date.now(), title, completed: false }]);
  };

  const toggleAllCompleted = (): void => {
    const newTodos = todos.map(
      (todo: ITodo): ITodo => {
        todo.completed = !toggleAllChecked;
        return todo;
      }
    );
    setTodos(newTodos);
    setToggleAllChecked(!toggleAllChecked);
  };

  const toggleCompleted = (todo: ITodo): void => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(
      (row: ITodo): boolean => row.id === todo.id
    );
    newTodos[todoIndex] = {
      ...newTodos[todoIndex],
      completed: !newTodos[todoIndex].completed,
    };
    setTodos(newTodos);
  };

  const clearCompleted = (): void => {
    const newTodos = todos.filter((todo: ITodo): ITodo | void => {
      if (!todo.completed) return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (todo: ITodo): void => {
    const newTodos = todos.filter((t: ITodo): ITodo | void => {
      if (t.id !== todo.id) return t;
    });
    setTodos(newTodos);
  };

  return (
    <div className={`container-wrapper ${theme}`}>
      <div className="container">
        <Header
          theme={theme}
          toggleTheme={(): void =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
        />
        <AddTodo
          onAddTodo={addTodo}
          onToggleAll={toggleAllCompleted}
          toggleAllChecked={toggleAllChecked}
        />
        <Todos
          todos={todos}
          toggleCompleted={(todo: ITodo): void => toggleCompleted(todo)}
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
