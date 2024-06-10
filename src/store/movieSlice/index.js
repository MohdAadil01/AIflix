import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlaying: null,
  popular: null,
  topRated: null,
  upcoming: null,
  trailer: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popular = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRated,
  addUpcoming,
  addTrailer,
} = movieSlice.actions;
export default movieSlice.reducer;
