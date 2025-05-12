import { configureStore } from "@reduxjs/toolkit";

import tasksListSlice from "./tasksListSlice";
import selectToDeleteSlice from "./selectToDeleteSlice";

export const store = configureStore({
  reducer: { tasksList: tasksListSlice, selectToDelete: selectToDeleteSlice },
});
