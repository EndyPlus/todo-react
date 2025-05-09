import { useState } from "react";
import { PRIORITIES } from "../../../../data/priorities";
import RadioButton from "../../../UI/RadioButton";
import TaskButton from "../../../UI/TaskButton";
import { useDispatch } from "react-redux";
import { editTask } from "../../../../store/tasksListSlice";

export default function EditTask({ data, onToggleEdit }) {
  const dispatch = useDispatch();

  const { taskId, taskTitle, taskDescription, taskPriority } = data;

  const [checkedBox, setCheckedBox] = useState(taskPriority);

  function editedData(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newtaskTitle = formData.get(`taskName--${taskId}`);

    const newTaskDescription = formData.get(`taskDesc--${taskId}`);

    const newTaskPriority = formData.get(`taskPriority--${taskId}`);

    const newDataObj = {
      ...data,
      taskTitle: newtaskTitle,
      taskDescription: newTaskDescription,
      taskPriority: newTaskPriority,
    };

    dispatch(editTask(newDataObj));
    onToggleEdit();
  }

  function handleChangeCheckbox(checkboxName) {
    setCheckedBox(checkboxName);
  }

  return (
    <div>
      <form
        className="task-edit-form"
        id={`edit-form--${taskId}`}
        onSubmit={editedData}
      >
        <h3>EDITING MODE</h3>
        <label htmlFor={`edit-form__title--${taskId}`}>Title:</label>
        <input
          id={`edit-form__title--${taskId}`}
          name={`taskName--${taskId}`}
          type="text"
          defaultValue={taskTitle}
        />
        <label htmlFor={`edit-form__textarea--${taskId}`}>Description:</label>
        <textarea
          name={`taskDesc--${taskId}`}
          id={`edit-form__textarea--${taskId}`}
          defaultValue={taskDescription}
        ></textarea>
        <label className="edit-form__radio-btns-label">Select priority</label>
        <div className="edit-form__radio-btns">
          {PRIORITIES.map((priority) => (
            <RadioButton
              key={`${taskId}-${priority}`}
              taskId={taskId}
              priority={priority}
              defaultChecked={priority === checkedBox}
              onSetCheckbox={handleChangeCheckbox}
            />
          ))}
        </div>
      </form>
      <div className="extended-controls">
        <TaskButton onClick={onToggleEdit} priority={taskPriority}>
          ↩️
        </TaskButton>
        <TaskButton form={`edit-form--${taskId}`} priority={taskPriority}>
          🆗
        </TaskButton>
      </div>
    </div>
  );
}
