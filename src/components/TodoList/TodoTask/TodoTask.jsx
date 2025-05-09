import { useState } from "react";
import TaskExtended from "./TaskExtended/TaskExtended";
import TaskMain from "./TaskMain";

export default function TodoTask({ task }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpanded() {
    setIsExpanded((prevState) => !prevState);
  }

  return (
    <li className="list-item">
      {!isExpanded && (
        <TaskMain
          onToggleExpand={toggleExpanded}
          task={task}
          // selectDelete={selectDelete}
        />
      )}

      {isExpanded && (
        <TaskExtended task={task} onToggleExpand={toggleExpanded} />
      )}
    </li>
  );
}
