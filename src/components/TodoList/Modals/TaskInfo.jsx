import Modal from "../../Modal";

export default function TaskInfo({ ref, data }) {
  function handleCloseModal() {
    ref.current.close();
  }

  return (
    <Modal ref={ref}>
      <button onClick={handleCloseModal}>Close</button>
      <h3>{data.taskTitle}</h3>
      <textarea name="" id="" defaultValue={data.taskDescription} />
    </Modal>
  );
}
