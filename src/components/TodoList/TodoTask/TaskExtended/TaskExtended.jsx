import { useState } from "react";
import TaskInfo from "./TaskInfo";
import TaskEdit from "./TaskEdit";

export default function TaskExtended({ onToggleExpand, task }) {
  const [isEditing, setIsEditing] = useState(false);

  function toggleEdit() {
    setIsEditing((prevState) => !prevState);
  }

  return (
    <div className="list-item--extended">
      {!isEditing && (
        <TaskInfo
          data={task}
          onToggleEdit={toggleEdit}
          onToggleExpand={onToggleExpand}
        />
      )}
      {isEditing && <TaskEdit data={task} onToggleEdit={toggleEdit} />}
    </div>
  );
}
