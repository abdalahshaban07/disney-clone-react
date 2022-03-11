import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState: initalState,
  reducers: {
    setMovies: (
      state,
      { payload: { recommend, newDisney, original, trending } }
    ) => {
      state.recommend = recommend;
      state.newDisney = newDisney;
      state.original = original;
      state.trending = trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
