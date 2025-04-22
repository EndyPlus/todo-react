import { useRef } from "react";
import TaskInfo from "./Modals/TaskInfo";

export default function TodoTask({ index, task, setTasks }) {
  const dialog = useRef();

  function toggleCompleteTask() {
    setTasks((prevList) => {
      return prevList.map((listItem) =>
        listItem.id === task.id
          ? { ...listItem, isComplete: !listItem.isComplete }
          : listItem
      );
    });
  }

  function deleteTask() {
    setTasks((prevList) => {
      const filteredList = prevList.filter(
        (listTask) => listTask.id !== task.id
      );

      return filteredList;
    });
  }

  function toggleExpanded() {
    console.log("Expand");
    dialog.current.showModal();
  }

  return (
    <>
      <TaskInfo ref={dialog} data={task} />
      <li className="list-item">
        <div className="text-control" onClick={toggleExpanded}>
          <span>{index}</span>

          <p className={task.isComplete ? "complete" : null}>
            {task.taskTitle}
          </p>
        </div>
        <div className="btn-control">
          <button onClick={deleteTask}>🗑️</button>
          <button onClick={toggleCompleteTask}>
            {task.isComplete ? "❌" : "✅"}
          </button>
        </div>
      </li>
    </>
  );
}
