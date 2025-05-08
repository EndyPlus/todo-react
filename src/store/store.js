import { configureStore } from "@reduxjs/toolkit";

import tasksListSlice from "./tasksListSlice";

export const store = configureStore({
  reducer: { tasksList: tasksListSlice },
});
