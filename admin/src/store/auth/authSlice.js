import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("userData")) || null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
  },
});

export const { loginUser } = authSlice.actions;

export default authSlice.reducer;
