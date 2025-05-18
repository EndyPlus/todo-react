import { useDispatch } from "react-redux";
import {
  deleteTask,
  toggleCompleteTask,
} from "../../../../store/tasksListSlice";
import TaskButton from "../../../UI/TaskButton";
import { unsetExpandedTask } from "../../../../store/expandTaskSlice";

export default function TaskInfo({ data, onToggleEdit }) {
  const dispatch = useDispatch();

  const { taskTitle, taskDescription, isCompleted, taskId, taskPriority } =
    data;

  function handleUnsetExpand() {
    dispatch(unsetExpandedTask());
  }

  function handleComplete() {
    dispatch(toggleCompleteTask(taskId));
    handleUnsetExpand();
  }

  function handleDeleteTask() {
    dispatch(deleteTask(taskId));
  }

  let extendedInfoHeading = `extended-info__heading--${taskPriority}`;
  let statusSpan = `extended-info__span`;

  if (isCompleted) {
    extendedInfoHeading += " text-completed";
    statusSpan += ` extended-info__span-completed--${taskPriority}`;
  } else {
    statusSpan += ` extended-info__span--${taskPriority}`;
  }

  return (
    <div className="extended-info">
      <h2 className={extendedInfoHeading} onClick={handleUnsetExpand}>
        {taskTitle}
      </h2>

      <h3>
        Priority:{" "}
        <span
          className={`extended-info__span extended-info__span--${taskPriority}`}
        >
          {taskPriority}
        </span>
      </h3>

      <h3>
        Status:{" "}
        <span className={statusSpan}>
          {isCompleted ? "Completed" : "Uncompleted"}
        </span>
      </h3>

      {taskDescription && <p>{taskDescription}</p>}

      <div className="extended-controls">
        <TaskButton onClick={handleUnsetExpand} priority={taskPriority}>
          ❌
        </TaskButton>
        <TaskButton onClick={handleDeleteTask} priority={taskPriority}>
          🗑️
        </TaskButton>
        {!isCompleted && (
          <TaskButton onClick={onToggleEdit} priority={taskPriority}>
            ✏️
          </TaskButton>
        )}
        <TaskButton onClick={handleComplete} priority={taskPriority}>
          {isCompleted ? "❎" : "✅"}
        </TaskButton>
      </div>
    </div>
  );
}
