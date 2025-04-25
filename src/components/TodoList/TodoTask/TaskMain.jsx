export default function TaskMain({ onToggleTask, onToggleExpand, task }) {
  let styles;

  if (task.isComplete) {
    styles = "btn-completed";
  }

  return (
    <div className="list-item--main">
      <button className={styles} onClick={onToggleTask}></button>
      <div className="text-control" onClick={onToggleExpand}>
        <p className={task.isComplete ? "complete" : null}>{task.taskTitle}</p>
      </div>
    </div>
  );
}
