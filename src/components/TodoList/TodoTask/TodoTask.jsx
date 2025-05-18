import { useEffect } from "react";
import TaskExtended from "./TaskExtended/TaskExtended";
import TaskMain from "./TaskMain";
import { useDispatch, useSelector } from "react-redux";
import { setExpandedTask } from "../../../store/expandTaskSlice";

export default function TodoTask({ task }) {
  const dispatch = useDispatch();

  const selectDelete = useSelector((state) => state.selectToDelete);
  const expandedTask = useSelector((state) => state.expandTask);

  useEffect(() => {
    if (selectDelete && expandedTask !== null) {
      dispatch(setExpandedTask(null));
    }
  }, [dispatch, selectDelete, expandedTask]);

  const isExpanded = expandedTask === task.taskId;

  return (
    <li className="list-item">
      {!isExpanded && <TaskMain task={task} selectDelete={selectDelete} />}

      {isExpanded && <TaskExtended task={task} />}
    </li>
  );
}
