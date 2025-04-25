import priorityFinder from "../../../utils/priorityFinder";

export default function TaskMain({ onToggleTask, onToggleExpand, task }) {
  const { taskTitle, taskPriority, isComplete } = task;

  const priorityObj = priorityFinder(taskPriority);

  const styleBtn = {
    borderColor: priorityObj.priorityMain,
  };

  const styleText = {
    color: priorityObj.priorityMain,
  };

  if (isComplete) {
    styleBtn.borderColor = priorityObj.priorityBrighter;
    styleBtn.backgroundColor = priorityObj.priorityBrighter;

    styleText.color = priorityObj.priorityBrighter;
  }

  return (
    <div className="list-item--main">
      <button
        className={task.isComplete ? "btn-completed" : null}
        style={styleBtn}
        onClick={onToggleTask}
      ></button>
      <div className="text-control" onClick={onToggleExpand}>
        <p
          className={task.isComplete ? "text-completed" : null}
          style={styleText}
        >
          {taskTitle}
        </p>
      </div>
    </div>
  );
}
