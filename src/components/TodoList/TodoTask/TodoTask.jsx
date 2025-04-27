import { useState } from "react";
import TaskExtended from "./TaskExtended/TaskExtended";
import TaskMain from "./TaskMain";
import priorityFinder from "../../../utils/priorityFinder";

export default function TodoTask({ task, setTasks }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const priorityObj = priorityFinder(task.taskPriority);

  function toggleCompleteTask() {
    setTasks((prevList) => {
      return prevList.map((listItem) =>
        listItem.id === task.id
          ? { ...listItem, isCompleted: !listItem.isCompleted }
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
          priorityObj={priorityObj}
        />
      )}

      {isExpanded && (
        <TaskExtended
          task={task}
          onToggleExpand={toggleExpanded}
          onToggleTask={toggleCompleteTask}
          onDeleteTask={deleteTask}
          priorityObj={priorityObj}
        />
      )}
    </li>
  );
}
