import { createSlice } from "@reduxjs/toolkit";

const initialValue = null;

const expandTaskSlice = createSlice({
  name: "expandTask",
  initialState: initialValue,
  reducers: {
    setExpandedTask: (state, action) => {
      return action.payload;
    },
    unsetExpandedTask: () => {
      return null;
    },
  },
});

export const { setExpandedTask, unsetExpandedTask } = expandTaskSlice.actions;

export default expandTaskSlice.reducer;
