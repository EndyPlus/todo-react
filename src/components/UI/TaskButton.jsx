export default function TaskButton({ children, priorityObj, ...props }) {
  return (
    <button {...props} style={{ borderColor: priorityObj.priorityMain }}>
      {children}
    </button>
  );
}
