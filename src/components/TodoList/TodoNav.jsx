import { useRef } from "react";
import NewTask from "../Modals/NewTask";

export default function TodoNav({ setTasks }) {
  const dialog = useRef();

  function handleOpenModal() {
    dialog.current.showModal();
  }

  function clearAllTasks() {
    setTasks(() => []);
  }

  return (
    <>
      <NewTask ref={dialog} setTasks={setTasks} />
      <nav className="todo-navigation">
        <li>
          <button onClick={handleOpenModal}>Add Task</button>
        </li>
        <li>
          <button onClick={clearAllTasks}>Clear All</button>
        </li>
      </nav>
    </>
  );
}
