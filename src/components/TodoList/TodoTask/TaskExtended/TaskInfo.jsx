import TaskButton from "../../../UI/TaskButton";

export default function TaskInfo({
  data,
  onToggleEdit,
  onToggleExpand,
  onToggleTask,
  onDeleteTask,
  priorityObj,
}) {
  const { taskTitle, taskDescription, isCompleted } = data;

  function handleComplete() {
    onToggleTask();
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
        <TaskButton onClick={onDeleteTask} priorityObj={priorityObj}>
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
