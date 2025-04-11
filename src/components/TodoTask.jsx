export default function TodoTask({ index, text = "Task" }) {
  function test() {
    console.log("click");
  }

  return (
    <li className="list-item">
      <span>{index}</span>
      <p>
        {text} {index}
      </p>
      <div className="btn-control">
        <button onClick={test}>❌</button>
        <button onClick={test}>✅</button>
      </div>
    </li>
  );
}
