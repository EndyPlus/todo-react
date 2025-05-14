import Modal from "../UI/Modal";

export default function ConfirmDelete({ ref, deleteFunction }) {
  function closeModal() {
    ref.current.close();
  }

  function confirmDeleting() {
    deleteFunction();

    closeModal();
  }

  return (
    <Modal ref={ref}>
      <div className="confirm-delete__container">
        <h3>Are you sure?</h3>
        <div className="confirm-delete__controls">
          <button onClick={closeModal}>No</button>
          <button onClick={confirmDeleting}>Yes</button>
        </div>
      </div>
    </Modal>
  );
}
