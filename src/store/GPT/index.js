import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showGptPage: false,
};
const toggleGpt = createSlice({
  name: "togglegpt",
  initialState,
  reducers: {
    toggleGPT: (state) => {
      state.showGptPage = !state.showGptPage;
    },
  },
});

export const { toggleGPT } = toggleGpt.actions;
export default toggleGpt.reducer;
