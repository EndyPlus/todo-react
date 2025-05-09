import { useDispatch } from "react-redux";
import {
  deleteTask,
  toggleCompleteTask,
} from "../../../../store/tasksListSlice";
import TaskButton from "../../../UI/TaskButton";

export default function TaskInfo({ data, onToggleEdit, onToggleExpand }) {
  const dispatch = useDispatch();

  const { taskTitle, taskDescription, isCompleted, taskId, taskPriority } =
    data;

  function handleComplete() {
    dispatch(toggleCompleteTask(taskId));
    onToggleExpand();
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
      <h2 className={extendedInfoHeading} onClick={onToggleExpand}>
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
      <p>{taskDescription}</p>
      <div className="extended-controls">
        <TaskButton onClick={onToggleExpand} priority={taskPriority}>
          ❌
        </TaskButton>
        <TaskButton
          onClick={() => dispatch(deleteTask(taskId))}
          priority={taskPriority}
        >
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
