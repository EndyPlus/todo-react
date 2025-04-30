import { useState } from "react";

export default function TaskMain({
  onToggleTask,
  onToggleExpand,
  priorityObj,
  task,
}) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const { taskTitle, isCompleted } = task;

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleMouseOut() {
    setIsMouseOver(false);
  }

  const styleBtn = {
    borderColor: priorityObj.priorityMain,
  };

  const styleText = {
    color: priorityObj.priorityMain,
  };

  if (isCompleted) {
    styleBtn.borderColor = priorityObj.priorityBrighter;
    styleBtn.backgroundColor = priorityObj.priorityBrighter;

    styleText.color = priorityObj.priorityBrighter;
  }

  if (isMouseOver) {
    styleText.color = priorityObj.priorityBrighter;
  }

  return (
    <div
      className="list-item--main"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {/* FOR SELECT TO DELETE */}
      {/* <button style={styleBtn}></button> */}
      <button
        className={task.isCompleted ? "btn-completed" : null}
        style={styleBtn}
        onClick={onToggleTask}
      ></button>
      <div className="text-control" onClick={onToggleExpand}>
        <p
          className={task.isCompleted ? "text-completed" : null}
          style={styleText}
        >
          {taskTitle}
        </p>
      </div>
    </div>
  );
}
