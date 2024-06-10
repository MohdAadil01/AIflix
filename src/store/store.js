import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/index.js";
import moviesReducer from "./movieSlice/index.js";
import toggleGPTReducer from "./GPT/index.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    toggleGPT: toggleGPTReducer,
  },
});

export default store;
