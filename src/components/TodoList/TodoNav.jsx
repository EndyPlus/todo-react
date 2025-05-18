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
import { unsetExpandedTask } from "../../store/expandTaskSlice";

export default function TodoNav() {
  const [deleteFn, setDeleteFn] = useState();

  const dispatch = useDispatch();

  const selectDelete = useSelector((state) => state.selectToDelete);

  const newTaskDialog = useRef();
  const confirmDeleteDialog = useRef();

  function handleOpenAddTaskModal() {
    dispatch(unsetExpandedTask());
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
            <button
              onClick={handleOpenAddTaskModal}
              className="todo-navigation__button"
            >
              Add Task
            </button>
          </li>
          <li>
            <button
              onClick={() => dispatch(toggleSelectToDelete())}
              className="todo-navigation__button"
            >
              Select to delete
            </button>
          </li>
          <li>
            <button
              onClick={handleClearAllCompleted}
              className="todo-navigation__button"
            >
              Clear All finished
            </button>
          </li>
          <li>
            <button
              onClick={handleClearAll}
              className="todo-navigation__button"
            >
              Clear All
            </button>
          </li>
        </nav>
      )}

      {selectDelete && (
        <form
          id="select-delete-form"
          onSubmit={deleteSelected}
          className="todo-navigation"
        >
          <button
            type="button"
            onClick={handleCancelSelect}
            className="todo-navigation__button"
          >
            Cancel
          </button>
          <button type="submit" className="todo-navigation__button">
            Delete
          </button>
        </form>
      )}
    </>
  );
}
