import { useState } from "react";
import TaskInfo from "./TaskInfo";
import TaskEdit from "./TaskEdit";

export default function TaskExtended({
  onToggleExpand,
  onToggleTask,
  onDeleteTask,
  onEditTask,
  priorityObj,
  task,
}) {
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
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
          priorityObj={priorityObj}
        />
      )}
      {isEditing && (
        <TaskEdit
          data={task}
          onToggleEdit={toggleEdit}
          onEditTask={onEditTask}
          priorityObj={priorityObj}
        />
      )}
    </div>
  );
}
