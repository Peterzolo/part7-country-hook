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
      console.log("BLOGID", blogId);
      const blog = state.blogs.find((blog) => blog.id === blogId);
      console.log("BLOG", blog);
      if (blog) {
        blog.likes += 1;
      }
    },
  },
});

export const { fetchBlogs, addBlog, fetchBlog, likeBlog } = blogSlice.actions;

export default blogSlice.reducer;
