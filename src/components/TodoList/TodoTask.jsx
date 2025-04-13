export default function TodoTask({ index, task, setTasks }) {
  function toggleCompleteTask() {
    setTasks((prevList) => {
      return prevList.map((listItem) =>
        listItem.id === task.id
          ? { ...listItem, isComplete: !listItem.isComplete }
          : listItem
      );
    });
  }

  function deleteTask() {
    setTasks((prevList) => {
      const filteredList = prevList.filter(
        (listTask) => listTask.id !== task.id
      );

      return filteredList;
    });
  }

  return (
    <li className="list-item">
      <span>{index}</span>
      <p className={task.isComplete ? "complete" : null}>{task.taskTitle}</p>
      <div className="btn-control">
        <button onClick={deleteTask}>🗑️</button>
        <button onClick={toggleCompleteTask}>
          {task.isComplete ? "❌" : "✅"}
        </button>
      </div>
    </li>
  );
}
