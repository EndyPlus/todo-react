import { useEffect, useState } from "react";
import TaskExtended from "./TaskExtended/TaskExtended";
import TaskMain from "./TaskMain";
import { useSelector } from "react-redux";

export default function TodoTask({ task }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const selectDelete = useSelector((state) => state.selectToDelete);

  useEffect(() => {
    if (selectDelete) {
      setIsExpanded(false);
    }
  }, [selectDelete]);

  function toggleExpanded() {
    setIsExpanded((prevState) => !prevState);
  }

  return (
    <li className="list-item">
      {!isExpanded && (
        <TaskMain
          onToggleExpand={toggleExpanded}
          task={task}
          selectDelete={selectDelete}
        />
      )}

      {isExpanded && (
        <TaskExtended
          task={task}
          onToggleExpand={toggleExpanded}
          selectDelete={selectDelete}
        />
      )}
    </li>
  );
}
