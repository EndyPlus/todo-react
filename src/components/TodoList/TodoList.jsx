import { useState } from "react";
import TodoNav from "./TodoNav";
import TodoTasks from "./TodoTasks";
import { DUMMY_TASKS } from "../../data/tasks";

export default function TodoList() {
  const [taskList, setTaskList] = useState(DUMMY_TASKS);

  return (
    <div id="todo">
      <TodoNav taskList={taskList} setTasks={setTaskList} />
      <TodoTasks taskList={taskList} setTasks={setTaskList} />
    </div>
  );
}
