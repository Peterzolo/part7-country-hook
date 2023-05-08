import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: {},
  isLoading: false,
  error: false,
};

const blogSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    register: (state, action) => {
      state.isLoading = true;
      state.user = action.payload;
      state.error = false;
    },
    login: (state, action) => {
      state.blog = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export const {
  fetchBlogs,
  addBlog,
  fetchBlog,
  likeBlog,
  deleteABlog,
  register,
} = blogSlice.actions;

export default blogSlice.reducer;
