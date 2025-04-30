import Modal from "../../UI/Modal";

export default function NewTask({ ref, setTasks }) {
  function closeModal() {
    ref.current.close();
  }

  function addTask(data) {
    console.log(data);
    setTasks((prevState) => {
      const randomId = crypto.randomUUID();

      const { testName: title, testDesc, priority } = data;
      return [
        ...prevState,
        {
          taskId: randomId,
          taskTitle: title,
          taskDescription: testDesc,
          taskPriority: priority,
          isCompleted: false,
        },
      ];
    });
    closeModal();
  }

  function submitForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const testName = formData.get("TEST-NAME");

    const testDesc = formData.get("test-desc");

    const priority = "none";

    console.log("Submit");

    addTask({ testName, testDesc, priority });

    e.target.reset();
  }

  return (
    <Modal ref={ref}>
      <div className="add-task">
        <div className="add-task__header">
          <span></span>
          <h3>Add Task</h3>
          <button onClick={closeModal}>&#x2716;</button>
        </div>
        <div className="add-task__main">
          <form id="test-form" onSubmit={submitForm}>
            <label>hfdsdsfdsaf</label>
            <input
              name="TEST-NAME"
              type="text"
              placeholder="sdfjdsjfds"
              required
            />
            <label> sdokfdpsofdsfds</label>
            <textarea name="test-desc" id="test" defaultValue="Task" required />
          </form>
          <button form="test-form">Add Task</button>
        </div>
      </div>
    </Modal>
  );
}
