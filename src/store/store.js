import { configureStore } from "@reduxjs/toolkit";

import tasksListSlice from "./tasksListSlice";
import selectToDeleteSlice from "./selectToDeleteSlice";
import expandTaskSlice from "./expandTaskSlice";

export const store = configureStore({
  reducer: {
    tasksList: tasksListSlice,
    selectToDelete: selectToDeleteSlice,
    expandTask: expandTaskSlice,
  },
});
