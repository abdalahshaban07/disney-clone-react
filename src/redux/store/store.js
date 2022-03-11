import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "redux/Slices/movieSlice";
import userReducer from "redux/Slices/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
