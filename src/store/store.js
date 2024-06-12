import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/index.js";
import moviesReducer from "./movieSlice/index.js";
import toggleGPTReducer from "./GPT/index.js";
import languageReducer from "./GPT/laguage.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    toggleGPT: toggleGPTReducer,
    language: languageReducer,
  },
});

export default store;
