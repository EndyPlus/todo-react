import TaskButton from "../../../UI/TaskButton";

export default function TaskInfo({
  data,
  onToggleEdit,
  onToggleExpand,
  onToggleTask,
  onDeleteTask,
  priorityObj,
}) {
  function handleComplete() {
    onToggleTask();
    onToggleExpand();
  }

  return (
    <div className="extended-info">
      <h2
        style={{ color: priorityObj.priorityBrighter }}
        className={data.isCompleted ? "text-completed" : null}
        onClick={onToggleExpand}
      >
        {data.taskTitle}
      </h2>
      <h3>
        Priority:{" "}
        <span style={{ color: priorityObj.priorityMain }}>
          {priorityObj.priority}
        </span>
      </h3>
      <p>{data.taskDescription}</p>
      <div className="extended-controls">
        <TaskButton onClick={onToggleExpand} priorityObj={priorityObj}>
          ❌
        </TaskButton>
        <TaskButton onClick={onDeleteTask} priorityObj={priorityObj}>
          🗑️
        </TaskButton>
        {!data.isCompleted && (
          <TaskButton onClick={onToggleEdit} priorityObj={priorityObj}>
            ✏️
          </TaskButton>
        )}
        <TaskButton onClick={handleComplete} priorityObj={priorityObj}>
          {data.isCompleted ? "❎" : "✅"}
        </TaskButton>
      </div>
    </div>
  );
}
