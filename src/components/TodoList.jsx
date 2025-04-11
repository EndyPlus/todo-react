import TodoNav from "./TodoNav";
import TodoTasks from "./TodoTasks";

export default function TodoList() {
  return (
    <div id="todo">
      <TodoNav />
      <TodoTasks />
    </div>
  );
}
