export default function NewTaskRadioBtn({
  priorityName,
  isChecked,
  onCheckedRadio,
}) {
  return (
    <li
      className="add-task__list-item"
      onClick={() => {
        onCheckedRadio(priorityName);
      }}
    >
      <input
        name="newTaskPriority"
        id={`priority-${priorityName}`}
        type="radio"
        defaultChecked={isChecked}
        value={priorityName}
      />
      <label
        className={`add-task__card add-task__card--${priorityName}`}
        htmlFor={`priority-${priorityName}`}
      >
        <div className="add-task__card-image"></div>
        <div className="add-task__card-description">
          <h4 className="add-task__card-heading">{priorityName}</h4>
          <p className="add-task__card-desc add-task__card-desc--first">
            First color
          </p>
          <p className="add-task__card-desc add-task__card-desc--second">
            Second color
          </p>
        </div>
      </label>
    </li>
  );
}
