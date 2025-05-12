import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import NewTask from "../Modals/NewTask";
import {
  clearAllTasks,
  clearAllCompletedTasks,
  clearAllSelectedTasks,
} from "../../store/tasksListSlice";
import { toggleSelectToDelete } from "../../store/selectToDeleteSlice";
import ConfirmDelete from "../Modals/ConfirmDelete";

export default function TodoNav() {
  const [deleteFn, setDeleteFn] = useState();

  const dispatch = useDispatch();

  const selectDelete = useSelector((state) => state.selectToDelete);

  const newTaskDialog = useRef();
  const confirmDeleteDialog = useRef();

  function handleOpenAddTaskModal() {
    newTaskDialog.current.showModal();
  }

  function handleOpenConfirmModal(fn) {
    setDeleteFn(() => fn);

    confirmDeleteDialog.current.showModal();
  }

  function handleClearAll() {
    handleOpenConfirmModal(() => dispatch(clearAllTasks()));
  }

  function handleClearAllCompleted() {
    handleOpenConfirmModal(() => dispatch(clearAllCompletedTasks()));
  }

  function handleCancelSelect(e) {
    e.preventDefault();

    dispatch(toggleSelectToDelete());
  }

  function handleSelectDelete(checkboxes) {
    dispatch(clearAllSelectedTasks(checkboxes));
    dispatch(toggleSelectToDelete());
  }

  function deleteSelected(e) {
    e.preventDefault();

    console.log("delete");

    const formData = new FormData(e.target);

    const selectedCheckboxes = formData.getAll("delete-checkbox");

    handleOpenConfirmModal(() => handleSelectDelete(selectedCheckboxes));
  }

  return (
    <>
      <NewTask ref={newTaskDialog} />
      <ConfirmDelete ref={confirmDeleteDialog} deleteFunction={deleteFn} />

      {!selectDelete && (
        <nav className="todo-navigation">
          <li>
            <button onClick={handleOpenAddTaskModal}>Add Task</button>
          </li>
          <li>
            <button onClick={() => dispatch(toggleSelectToDelete())}>
              Select to delete
            </button>
          </li>
          <li>
            <button onClick={handleClearAllCompleted}>
              Clear All finished
            </button>
          </li>
          <li>
            <button onClick={handleClearAll}>Clear All</button>
          </li>
        </nav>
      )}

      {selectDelete && (
        <form id="select-delete-form" onSubmit={deleteSelected}>
          <button type="button" onClick={handleCancelSelect}>
            Cancel
          </button>
          <button type="submit">Delete</button>
        </form>
      )}
    </>
  );
}
