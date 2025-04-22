import { useRef } from "react";
import numberToEmoji from "../../utils/numberToEmoji";
import NewTask from "./Modals/NewTask";

export default function TodoNav({ taskList, setTasks }) {
  const dialog = useRef();

  function handleOpenModal() {
    dialog.current.showModal();
  }

  function clearAllTasks() {
    setTasks(() => []);
  }

  const uncompletedLength = taskList.filter((task) => !task.isComplete).length;

  return (
    <>
      <NewTask ref={dialog} setTasks={setTasks} />
      <nav className="todo-navigation">
        <li>
          <button onClick={handleOpenModal}>Add Task</button>
        </li>
        <li className="fixed-item">
          {uncompletedLength ? (
            <h3>
              Tasks left: <span>{numberToEmoji(uncompletedLength)}</span>
            </h3>
          ) : (
            <h3>Congratulations! 🎊</h3>
          )}
        </li>
        <li>
          <button onClick={clearAllTasks}>Delete All Tasks</button>
        </li>
      </nav>
    </>
  );
}
