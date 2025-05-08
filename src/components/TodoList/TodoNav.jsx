import { useRef } from "react";
import { useDispatch } from "react-redux";

import NewTask from "../Modals/NewTask";
import {
  clearAllTasks,
  clearAllCompletedTasks,
} from "../../store/tasksListSlice";

export default function TodoNav() {
  const dispatch = useDispatch();

  const dialog = useRef();

  function handleOpenModal() {
    dialog.current.showModal();
  }

  return (
    <>
      <NewTask ref={dialog} />

      {/* {!selectDelete && ( */}
      <nav className="todo-navigation">
        <li>
          <button onClick={handleOpenModal}>Add Task</button>
        </li>
        <li>
          <button onClick={() => console.log("toggleSelectDelete")}>
            Select to delete
          </button>
        </li>
        <li>
          <button onClick={() => dispatch(clearAllCompletedTasks())}>
            Clear All finished
          </button>
        </li>
        <li>
          <button onClick={() => dispatch(clearAllTasks())}>Clear All</button>
        </li>
      </nav>
      {/* )} */}

      {/* {selectDelete && (
        <form>
          <button onClick={toggleSelectDelete}>Cancel</button>
          <button>Delete</button>
        </form>
      )} */}
    </>
  );
}
