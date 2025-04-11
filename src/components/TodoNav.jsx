export default function TodoNav() {
  function test() {
    console.log("test");
  }

  return (
    <nav className="todo-navigation">
      <li>
        <button onClick={test}>Add Task</button>
      </li>
      <li>
        <button onClick={test}>Delete All Tasks</button>
      </li>
    </nav>
  );
}
