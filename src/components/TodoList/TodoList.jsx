import { useState } from "react";
import TodoNav from "./TodoNav";
import TodoTasks from "./TodoTasks";

const DUMMY_TASKS = [
  { id: "t1", taskTitle: "Make todo list on react", isComplete: false },
  { id: "t2", taskTitle: "Some dummy task 2", isComplete: true },
  { id: "t3", taskTitle: "Some dummy task 3", isComplete: false },
  { id: "t4", taskTitle: "Some dummy task 4", isComplete: false },
  {
    id: "t5",
    taskTitle:
      "Some dummy task 5 Some dummy task 5 Some dummy task 5 Some dummy task 5 Some dummy task 5 Some dummy task 5 Some dummy task 5 Some dummy task 5 ",
    isComplete: false,
  },
];

export default function TodoList() {
  const [taskList, setTaskList] = useState(DUMMY_TASKS);

  return (
    <div id="todo">
      <TodoNav taskList={taskList} setTasks={setTaskList} />
      <TodoTasks taskList={taskList} setTasks={setTaskList} />
    </div>
  );
}
