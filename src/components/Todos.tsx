import { ITodo } from "../App";
import EmptyTodoItem from "./EmptyTodoItem";
import TodoItem from "./TodoItem";

interface TodosProps {
  todos: ITodo[];
  toggleCompleted: (todo: ITodo) => void;
  filterKey: string;
  deleteTodo: (todo: ITodo) => void;
}

const Todos = ({
  todos,
  toggleCompleted,
  filterKey,
  deleteTodo,
}: TodosProps): JSX.Element => {
  const filterTodos = (): ITodo[] => {
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
      {filterTodos().map(
        (todo: ITodo): JSX.Element => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        )
      )}
    </div>
  );
};
export default Todos;
