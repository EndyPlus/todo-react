export default function TodoList() {
  return (
    <div id="todo">
      <nav className="todo-navigation">
        <li>
          <button>Add</button>
        </li>
        <li>
          <button>Delete All</button>
        </li>
      </nav>
      <div className="todo-container">
        <ul>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
        </ul>
      </div>
    </div>
  );
}
