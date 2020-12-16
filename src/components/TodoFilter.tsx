import { ITodo } from "../App";

interface TodoFilterProps {
  todos: ITodo[];
  clearCompleted: () => void;
  setFilterkey: React.Dispatch<React.SetStateAction<string>>;
  filterKey: string; // TODO: replace with enum
}

const TodoFilter = ({
  todos,
  filterKey,
  setFilterkey,
  clearCompleted,
}: TodoFilterProps): JSX.Element => {
  const activeTodosCount = () =>
    todos.filter((t: ITodo): boolean => !t.completed).length;

  const activeClassName = (filter: string): string =>
    filterKey === filter ? "active" : "";

  return (
    <div className="todo-filters-container">
      <div className="items-count">{activeTodosCount()} items left</div>

      <div className="filters">
        <a
          href="#"
          onClick={() => setFilterkey("All")}
          className={activeClassName("All")}
        >
          All
        </a>
        <a
          href="#"
          onClick={() => setFilterkey("Active")}
          className={activeClassName("Active")}
        >
          Active
        </a>
        <a
          href="#"
          onClick={() => setFilterkey("Completed")}
          className={activeClassName("Completed")}
        >
          Completed
        </a>
      </div>

      <a href="#" onClick={clearCompleted}>
        Clear completed
      </a>
    </div>
  );
};

export default TodoFilter;
