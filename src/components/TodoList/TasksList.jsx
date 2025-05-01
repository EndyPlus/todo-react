import TodoTask from "./TodoTask/TodoTask";
import numberToEmoji from "../../utils/numberToEmoji";

export default function TasksList({ title, taskList, setTasks }) {
  return (
    <div>
      <h2 className="list-heading">{`${title}: ${numberToEmoji(
        taskList.length
      )}`}</h2>
      <ul>
        {taskList.map((task) => (
          <TodoTask key={task.taskId} task={task} setTasks={setTasks} />
        ))}
      </ul>
    </div>
  );
}
