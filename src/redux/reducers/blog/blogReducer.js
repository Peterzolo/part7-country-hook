import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  blog: {},
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    fetchBlogs: (state, action) => {
      state.blogs = action.payload;
    },

    addBlog: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { fetchBlogs, addBlog } = blogSlice.actions;

export default blogSlice.reducer;
