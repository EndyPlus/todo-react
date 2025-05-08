import { useDispatch } from "react-redux";
import {
  deleteTask,
  toggleCompleteTask,
} from "../../../../store/tasksListSlice";
import TaskButton from "../../../UI/TaskButton";

export default function TaskInfo({
  data,
  onToggleEdit,
  onToggleExpand,
  // onToggleTask,
  // onDeleteTask,
  priorityObj,
}) {
  const dispatch = useDispatch();

  const { taskTitle, taskDescription, isCompleted, taskId } = data;

  function handleComplete() {
    dispatch(toggleCompleteTask(taskId));
    onToggleExpand();
  }

  return (
    <div className="extended-info">
      <h2
        style={{ color: priorityObj.priorityBrighter }}
        className={isCompleted ? "text-completed" : null}
        onClick={onToggleExpand}
      >
        {taskTitle}
      </h2>
      <h3>
        Priority:{" "}
        <span style={{ color: priorityObj.priorityMain }}>
          {priorityObj.priority}
        </span>
      </h3>
      <h3>
        Status:{" "}
        <span
          style={
            isCompleted
              ? { color: priorityObj.priorityBrighter }
              : { color: priorityObj.priorityMain }
          }
        >
          {isCompleted ? "Completed" : "Uncompleted"}
        </span>
      </h3>
      <p>{taskDescription}</p>
      <div className="extended-controls">
        <TaskButton onClick={onToggleExpand} priorityObj={priorityObj}>
          ❌
        </TaskButton>
        <TaskButton
          onClick={() => dispatch(deleteTask(taskId))}
          priorityObj={priorityObj}
        >
          🗑️
        </TaskButton>
        {!isCompleted && (
          <TaskButton onClick={onToggleEdit} priorityObj={priorityObj}>
            ✏️
          </TaskButton>
        )}
        <TaskButton onClick={handleComplete} priorityObj={priorityObj}>
          {isCompleted ? "❎" : "✅"}
        </TaskButton>
      </div>
    </div>
  );
}
