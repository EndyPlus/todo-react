export default function TaskInfo({ data }) {
  return (
    <div>
      <button>Close</button>
      <h3>{data.taskTitle}</h3>
      <textarea name="" id="" defaultValue={data.taskDescription} />
      <button>EDIT</button>
    </div>
  );
}
