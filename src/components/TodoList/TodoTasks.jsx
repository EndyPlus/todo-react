import { useSelector } from "react-redux";
import TasksList from "./TasksList";

export default function TodoTasks() {
  const tasksList = useSelector((state) => state.tasksList);

  const actualTasksList = tasksList.filter((task) => !task.isCompleted);
  const finishedTasksList = tasksList.filter((task) => task.isCompleted);

  return (
    <div className="todo-container">
      {actualTasksList.length ? (
        <TasksList title="Actual tasks" taskList={actualTasksList} />
      ) : null}
      {finishedTasksList.length ? (
        <TasksList title="Finished tasks" taskList={finishedTasksList} />
      ) : null}
    </div>
  );
}
