import { useDispatch } from "react-redux";
import { toggleCompleteTask } from "../../../store/tasksListSlice";
import Checkbox from "../../UI/Checkbox";

export default function TaskMain({ onToggleExpand, task, selectDelete }) {
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
      {selectDelete && (
        <>
          <Checkbox id={taskId} />
          <label htmlFor={`checkbox-${taskId}`} className="text-control">
            <p className={taskDesc}>{taskTitle}</p>
          </label>
        </>
      )}

      {!selectDelete && (
        <>
          <button
            className={taskBtn}
            onClick={() => dispatch(toggleCompleteTask(taskId))}
          ></button>
          <div
            className="text-control"
            onClick={selectDelete ? null : onToggleExpand}
          >
            <p className={taskDesc}>{taskTitle}</p>
          </div>
        </>
      )}
    </div>
  );
}
