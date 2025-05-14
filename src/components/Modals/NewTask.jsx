import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "../UI/Modal";
import RadioCard from "../UI/RadioCard";

import { addTask } from "../../store/tasksListSlice";
import { PRIORITIES } from "../../data/priorities";

export default function NewTask({ ref }) {
  const dispatch = useDispatch();

  const [checkedRadio, setCheckedRadio] = useState("none");

  const testRef = useRef();

  function closeModal() {
    testRef.current.reset();
    setCheckedRadio("none");

    ref.current.close();
  }

  function addNewTask(data) {
    const isComplete = false;
    const randomId = crypto.randomUUID();

    const newTask = { ...data, taskId: randomId, isComplete };

    dispatch(addTask(newTask));
  }

  function submitForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const taskTitle = formData.get("taskTitle");

    const taskDescription = formData.get("taskDescription");

    const taskPriority = formData.get("newTaskPriority");

    addNewTask({ taskTitle, taskDescription, taskPriority });

    e.target.reset();

    closeModal();
  }

  return (
    <Modal ref={ref}>
      <div className="add-task">
        <div className="add-task__header">
          <h3>Create new task</h3>
        </div>
        <div className="add-task__main">
          <form id="add-task-form" onSubmit={submitForm} ref={testRef}>
            <label htmlFor="taskTitle">Enter task name:</label>
            <input
              name="taskTitle"
              id="taskTitle"
              type="text"
              placeholder="Write a title for your task..."
              required
            />
            <label htmlFor="taskDescription">Enter description:</label>
            <textarea
              name="taskDescription"
              id="taskDescription"
              placeholder="Describe your task... (optional)"
            />
            <h3>Select priority:</h3>
            <ul>
              {PRIORITIES.map((priority) => {
                return (
                  <RadioCard
                    key={priority}
                    priorityName={priority}
                    isChecked={checkedRadio === priority}
                    onCheckedRadio={setCheckedRadio}
                  />
                );
              })}
            </ul>
            <div className="add-task__controls">
              <button type="button" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
