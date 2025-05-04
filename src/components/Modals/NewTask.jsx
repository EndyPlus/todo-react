import Modal from "../UI/Modal";
import NewTaskRadioBtn from "../UI/NewTaskRadioBtn";
import { PRIORITIES } from "../../data/priorities";
import { useState } from "react";

export default function NewTask({ ref, setTasks }) {
  const [checkedBox, setCheckedBox] = useState(PRIORITIES[0].priorityId);

  function closeModal() {
    ref.current.close();
  }

  function addTask(data) {
    setTasks((prevState) => {
      const randomId = crypto.randomUUID();

      const { taskTitle, taskDescription, taskPriority } = data;

      return [
        {
          taskId: randomId,
          taskTitle,
          taskDescription,
          taskPriority,
          isCompleted: false,
        },
        ...prevState,
      ];
    });
    closeModal();
  }

  function submitForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const taskTitle = formData.get("taskTitle");

    const taskDescription = formData.get("taskDescription");

    const taskPriority = formData.get("newTaskPriority");

    // console.log(Object.fromEntries(formData.entries()));

    addTask({ taskTitle, taskDescription, taskPriority });

    e.target.reset();
  }

  return (
    <Modal ref={ref}>
      <div className="add-task">
        <div className="add-task__header">
          <h3>Create new task</h3>
        </div>
        <div className="add-task__main">
          <form id="add-task-form" onSubmit={submitForm}>
            <label htmlFor="taskTitle">Enter task name:</label>
            <input
              name="taskTitle"
              id="taskTitle"
              type="text"
              placeholder="Write a title for your task."
              required
            />
            <label htmlFor="taskDescription">Enter description:</label>
            <textarea
              name="taskDescription"
              id="taskDescription"
              placeholder="Describe your task. "
              required
            />
            <h3>Select priority:</h3>
            <ul>
              {PRIORITIES.map((priority) => {
                return (
                  <NewTaskRadioBtn
                    key={priority.priorityId}
                    priorityData={priority}
                    isChecked={priority.priorityId === checkedBox}
                    onCheckedBox={setCheckedBox}
                  />
                );
              })}
            </ul>
            <div className="add-task__controls">
              <button onClick={closeModal}>Cancel</button>
              <button type="submit" form="add-task-form">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
