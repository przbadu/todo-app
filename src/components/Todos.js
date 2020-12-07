import EmptyTodoItem from "./EmptyTodoItem";
import TodoItem from "./TodoItem";

export default function Todos({
  todos,
  toggleCompleted,
  filterKey,
  deleteTodo,
}) {
  const filterTodos = () => {
    switch (filterKey) {
      case "Active":
        return todos.filter((t) => !t.completed);
      case "Completed":
        return todos.filter((t) => t.completed);
      default:
        return todos;
    }
  };

  if (filterTodos().length <= 0) {
    return (
      <div className="todo-list-container">
        <EmptyTodoItem />
      </div>
    );
  }

  return (
    <div className="todo-list-container">
      {filterTodos().map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
