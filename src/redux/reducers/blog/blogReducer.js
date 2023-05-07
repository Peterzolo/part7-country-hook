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
    fetchBlog: (state, action) => {
      state.blog = action.payload;
    },

    addBlog: (state, action) => {
      state.content = action.payload;
    },
    likeBlog: (state, action) => {
      const blogId = action.payload;
      const blog = state.blogs.find((blog) => blog.id === blogId);
      if (blog) {
        blog.likes += 1;
      }
    },
  },
});

export const { fetchBlogs, addBlog, fetchBlog } = blogSlice.actions;

export default blogSlice.reducer;
