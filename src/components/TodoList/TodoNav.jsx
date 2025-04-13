export default function TodoNav({ taskList, setTasks }) {
  function addTask() {
    setTasks((prevState) => {
      const randomId = Math.trunc(Math.random() * 100000);
      return [
        ...prevState,
        {
          id: randomId,
          taskTitle: `Some dummy task ${randomId}`,
          isComplete: false,
        },
      ];
    });
  }

  function clearAllTasks() {
    setTasks(() => []);
  }

  console.log(taskList);

  const uncompletedLength = taskList.filter((task) => !task.isComplete).length;

  return (
    <nav className="todo-navigation">
      <li>
        <button onClick={addTask}>Add Task</button>
      </li>
      <li className="fixed-item">
        {uncompletedLength ? (
          <h3>
            Tasks left: <span>{uncompletedLength}</span>
          </h3>
        ) : (
          <h3>Congratulations! 🎊</h3>
        )}
      </li>
      <li>
        <button onClick={clearAllTasks}>Delete All Tasks</button>
      </li>
    </nav>
  );
}
