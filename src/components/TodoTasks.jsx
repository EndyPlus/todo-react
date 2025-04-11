import TodoTask from "./TodoTask";

export default function TodoTasks() {
  return (
    <div className="todo-container">
      <ul>
        <TodoTask index={1} />
        <TodoTask index={2} />
        <TodoTask index={3} />
        <TodoTask index={4} />
        <TodoTask index={4} />
      </ul>
    </div>
  );
}
