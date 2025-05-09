export default function TaskButton({ children, priority, ...props }) {
  return (
    <button
      {...props}
      className={`extended-controls__button extended-controls__button--${priority}`}
    >
      {children}
    </button>
  );
}
