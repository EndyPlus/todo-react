import { useState } from "react";
import TaskExtended from "./TaskExtended/TaskExtended";
import TaskMain from "./TaskMain";
import priorityFinder from "../../../utils/priorityFinder";

export default function TodoTask({ task }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const priorityObj = priorityFinder(task.taskPriority);

  function toggleExpanded() {
    setIsExpanded((prevState) => !prevState);
  }

  return (
    <li className="list-item">
      {!isExpanded && (
        <TaskMain
          onToggleExpand={toggleExpanded}
          task={task}
          priorityObj={priorityObj}
          // selectDelete={selectDelete}
        />
      )}

      {isExpanded && (
        <TaskExtended
          task={task}
          onToggleExpand={toggleExpanded}
          priorityObj={priorityObj}
        />
      )}
    </li>
  );
}
