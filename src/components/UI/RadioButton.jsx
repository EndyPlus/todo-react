export default function RadioButton({
  taskId,
  priority,
  defaultChecked,
  onSetCheckbox,
}) {
  let customRadio = `custom-radio custom-radio--${priority}`;

  if (defaultChecked) {
    customRadio += ` custom-radio--checked-${priority}`;
  }

  return (
    <div className="edit-form__styled-radio">
      <input
        id={`priority-${priority}--${taskId}`}
        name={`taskPriority--${taskId}`}
        type="radio"
        value={`${priority}`}
        defaultChecked={defaultChecked}
        onChange={() => onSetCheckbox(priority)}
      />
      <label
        htmlFor={`priority-${priority}--${taskId}`}
        className={customRadio}
      ></label>
    </div>
  );
}
