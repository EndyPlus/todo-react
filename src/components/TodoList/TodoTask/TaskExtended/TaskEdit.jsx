import TaskButton from "../../../UI/TaskButton";

export default function EditTask({
  data,
  onToggleEdit,
  onToggleTask,
  priorityObj,
}) {
  return (
    <div>
      <h3>{data.taskTitle}</h3>
      <textarea name="" id="" defaultValue={data.taskDescription}></textarea>
      <div className="extended-controls">
        <TaskButton onClick={onToggleEdit} priorityObj={priorityObj}>
          ↩️
        </TaskButton>
        <TaskButton onClick={onToggleTask} priorityObj={priorityObj}>
          🆗
        </TaskButton>
      </div>
    </div>
  );
}
