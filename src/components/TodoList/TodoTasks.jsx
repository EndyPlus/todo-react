import TodoTask from "./TodoTask/TodoTask";

export default function TodoTasks({ taskList, setTasks }) {
  return (
    <div className="todo-container">
      <ul>
        {taskList.map((task) => (
          <TodoTask key={task.taskId} task={task} setTasks={setTasks} />
        ))}
      </ul>
    </div>
  );
}
