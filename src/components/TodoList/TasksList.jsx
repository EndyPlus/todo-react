import TodoTask from "./TodoTask/TodoTask";
import numberToEmoji from "../../utils/numberToEmoji";

export default function TasksList({ title, taskList }) {
  return (
    <div>
      <h2 className="list-heading">{`${title}: ${numberToEmoji(
        taskList.length
      )}`}</h2>
      <ul>
        {taskList.map((task) => (
          <TodoTask key={task.taskId} task={task} />
        ))}
      </ul>
    </div>
  );
}
