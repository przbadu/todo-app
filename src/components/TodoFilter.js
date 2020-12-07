export default function TodoFilter({
  todos,
  filterKey,
  setFilterkey,
  clearCompleted,
}) {
  const activeTodosCount = () => todos.filter((t) => !t.completed).length;
  const activeClassName = (filter) => (filterKey === filter ? "active" : "");

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
}
