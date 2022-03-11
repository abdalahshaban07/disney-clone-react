import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initalState,
  reducers: {
    getUserLoginDetails: (state, { payload: { name, email, photo } }) => {
      state.name = name;
      state.email = email;
      state.photo = photo;
    },

    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { getUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
