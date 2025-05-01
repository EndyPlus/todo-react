import TasksList from "./TasksList";

export default function TodoTasks({ taskList, setTasks }) {
  const actualTasksList = taskList.filter((task) => !task.isCompleted);
  const finishedTasksList = taskList.filter((task) => task.isCompleted);

  return (
    <div className="todo-container">
      {actualTasksList.length ? (
        <TasksList
          title="Actual tasks"
          taskList={actualTasksList}
          setTasks={setTasks}
        />
      ) : null}
      {finishedTasksList.length ? (
        <TasksList
          title="Finished tasks"
          taskList={finishedTasksList}
          setTasks={setTasks}
        />
      ) : null}
    </div>
  );
}
