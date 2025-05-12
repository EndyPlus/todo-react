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
      Are u sure?
      <button onClick={closeModal}>No</button>
      <button onClick={confirmDeleting}>Yes</button>
    </Modal>
  );
}
