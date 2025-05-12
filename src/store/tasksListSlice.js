import { createSlice } from "@reduxjs/toolkit";

import { DUMMY_TASKS } from "../data/tasks";

const initialState = DUMMY_TASKS;

const tasksListSlice = createSlice({
  name: "tasksList",
  // initialState: initialState,
  initialState,
  reducers: {
    // ADD NEW TASK
    addTask: (state, action) => {
      state.unshift(action.payload);
    },

    // CLEAR ALL TASKS
    clearAllTasks: () => [],

    // CLEAR ALL COMPLETED TASKS
    clearAllCompletedTasks(state) {
      return state.filter((task) => !task.isCompleted);
    },

    // CLEAR ALL SELECTED TASKS
    clearAllSelectedTasks: (state, action) => {
      const deleteIdArr = action.payload;
      return state.filter((task) => !deleteIdArr.includes(task.taskId));
    },

    // COMPLETE/UNCOMPLETE TASK
    toggleCompleteTask: (state, action) => {
      return state.map((listItem) =>
        listItem.taskId === action.payload
          ? { ...listItem, isCompleted: !listItem.isCompleted }
          : listItem
      );
    },

    // DELETE TASK
    deleteTask: (state, action) => {
      return state.filter((listItem) => listItem.taskId !== action.payload);
    },

    // EDIT TASK
    editTask: (state, action) => {
      const newTaskData = action.payload;
      return state.map((listItem) =>
        listItem.taskId === newTaskData.taskId ? { ...newTaskData } : listItem
      );
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
