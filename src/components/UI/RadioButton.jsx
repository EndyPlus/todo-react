export default function RadioButton({
  taskId,
  priorityData,
  defaultChecked,
  onSetCheckbox,
}) {
  const { priority: priorityName, priorityMain: priorityColor } = priorityData;

  const styleRadio = {
    borderColor: priorityColor,
  };

  if (defaultChecked) {
    styleRadio.backgroundColor = priorityColor;
  }

  return (
    <div className="edit-form__styled-radio">
      <input
        id={`priority-${priorityName}--${taskId}`}
        name={`taskPriority--${taskId}`}
        type="radio"
        value={`${priorityName}`}
        defaultChecked={defaultChecked}
        onChange={() => onSetCheckbox(priorityName)}
      />
      <label
        htmlFor={`priority-${priorityName}--${taskId}`}
        className="custom-radio"
        style={styleRadio}
      ></label>
    </div>
  );
}
