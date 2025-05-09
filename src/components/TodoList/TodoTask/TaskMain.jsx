import { useDispatch } from "react-redux";
import { toggleCompleteTask } from "../../../store/tasksListSlice";

export default function TaskMain({ onToggleExpand, task }) {
  const dispatch = useDispatch();

  const { taskTitle, isCompleted, taskId, taskPriority } = task;

  let taskBtn = `btn-uncompleted--${taskPriority}`;
  let taskDesc = `text-uncompleted--${taskPriority}`;

  if (isCompleted) {
    taskBtn = `btn-completed--${taskPriority}`;
    taskDesc = `text-completed text-completed--${taskPriority}`;
  }

  return (
    <div className="list-item--main">
      {/* FOR SELECT TO DELETE */}
      {/* {selectDelete && <button style={styleBtn}></button>} */}

      <button
        className={taskBtn}
        onClick={() => dispatch(toggleCompleteTask(taskId))}
      ></button>
      <div className="text-control" onClick={onToggleExpand}>
        <p className={taskDesc}>{taskTitle}</p>
      </div>
    </div>
  );
}
