import { createSlice } from "@reduxjs/toolkit";

import { DUMMY_TASKS } from "../data/tasks";
import { updateLocalTasksStorage } from "../utils/updateLocalTasksStorage";

let initialState;

if (JSON.parse(localStorage.getItem("tasks")) !== null) {
  initialState = JSON.parse(localStorage.getItem("tasks"));
} else {
  initialState = DUMMY_TASKS;
}

const tasksListSlice = createSlice({
  name: "tasksList",
  initialState,
  reducers: {
    // ADD NEW TASK
    addTask: (state, action) => {
      state.unshift(action.payload);
      updateLocalTasksStorage(state);
    },

    // CLEAR ALL TASKS
    clearAllTasks: () => {
      updateLocalTasksStorage([]);
      return [];
    },

    // CLEAR ALL COMPLETED TASKS
    clearAllCompletedTasks(state) {
      const newState = state.filter((task) => !task.isCompleted);
      updateLocalTasksStorage(newState);
      return newState;
    },

    // CLEAR ALL SELECTED TASKS
    clearAllSelectedTasks: (state, action) => {
      const deleteIdArr = action.payload;
      const newState = state.filter(
        (task) => !deleteIdArr.includes(task.taskId)
      );
      updateLocalTasksStorage(newState);
      return newState;
    },

    // COMPLETE/UNCOMPLETE TASK
    toggleCompleteTask: (state, action) => {
      const newState = state.map((listItem) =>
        listItem.taskId === action.payload
          ? { ...listItem, isCompleted: !listItem.isCompleted }
          : listItem
      );
      updateLocalTasksStorage(newState);
      return newState;
    },

    // DELETE TASK
    deleteTask: (state, action) => {
      const newState = state.filter(
        (listItem) => listItem.taskId !== action.payload
      );
      updateLocalTasksStorage(newState);
      return newState;
    },

    // EDIT TASK
    editTask: (state, action) => {
      const newTaskData = action.payload;
      const newState = state.map((listItem) =>
        listItem.taskId === newTaskData.taskId ? { ...newTaskData } : listItem
      );
      updateLocalTasksStorage(newState);
      return newState;
    },
  },
});

export const {
  addTask,
  clearAllTasks,
  clearAllCompletedTasks,
  clearAllSelectedTasks,
  toggleCompleteTask,
  deleteTask,
  editTask,
} = tasksListSlice.actions;

export default tasksListSlice.reducer;
