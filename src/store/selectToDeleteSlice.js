import { createSlice } from "@reduxjs/toolkit";

const initialValue = false;

const selectToDeleteSlice = createSlice({
  name: "selectToDelete",
  initialState: initialValue,
  reducers: {
    toggleSelectToDelete: (state) => {
      return !state;
    },
  },
});

export const { toggleSelectToDelete } = selectToDeleteSlice.actions;

export default selectToDeleteSlice.reducer;
