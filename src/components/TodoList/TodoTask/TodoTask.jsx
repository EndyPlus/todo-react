import { useState } from "react";
import TaskExtended from "./TaskExtended/TaskExtended";
import TaskMain from "./TaskMain";

export default function TodoTask({ task, setTasks }) {
  const [isExpanded, setIsExpanded] = useState(false);

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
    setIsExpanded((prevState) => !prevState);
  }

  return (
    <li className="list-item">
      {!isExpanded && (
        <TaskMain
          onToggleTask={toggleCompleteTask}
          onDeleteTask={deleteTask}
          onToggleExpand={toggleExpanded}
          task={task}
        />
      )}

      {isExpanded && (
        <TaskExtended data={task} onToggleExpand={toggleExpanded} />
      )}
    </li>
  );
}
