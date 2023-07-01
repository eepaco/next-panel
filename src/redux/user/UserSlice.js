import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    profile: "",
  },
  reducers: {
    getProfile: (state) => {
      return state.username;
    },
  },
});

export const { getProfile } = userSlice.actions;

export default userSlice.reducer;
