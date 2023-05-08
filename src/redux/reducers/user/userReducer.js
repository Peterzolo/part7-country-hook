import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: null,
  user: {},
  users: [],
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    signupSuccess: (state, action) => {
      state.isLoading = false;
      state.auth = action.payload;
    },
    signupFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    signin: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    signinSuccess: (state, action) => {
      state.isLoading = false;
      state.auth = action.payload;
    },
    signinFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getUser: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getUserSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    getUserFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getAllUsers: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getAllUserSuccess: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    getAllUserFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signup,
  signupSuccess,
  signupFail,
  signin,
  signinSuccess,
  signinFail,
  getUser,
  getUserSuccess,
  getUserFail,
  getAllUsers,
  getAllUserSuccess,
  getAllUserFail,
} = authSlice.actions;

export default authSlice.reducer;
