import TodoTask from "./TodoTask";

export default function TodoTasks({ taskList, setTasks }) {
  return (
    <div className="todo-container">
      <ul>
        {taskList.map((task, id) => (
          <TodoTask
            key={task.id}
            index={id + 1}
            task={task}
            setTasks={setTasks}
          />
        ))}
      </ul>
    </div>
  );
}
