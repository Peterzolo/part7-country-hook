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
      state.blogs.push(action.payload);
    },
    deleteABlog: (state, action) => {
      const blogId = action.payload;
      const index = state.blogs.findIndex((blog) => blog.id === blogId);
      if (index !== -1) {
        state.blogs.splice(index, 1);
      }
    },

    likeBlog: (state, action) => {
      const blogId = action.payload;
      const blog = state.blogs.find((blog) => blog.id === blogId);
      if (blog) {
        blog.likes += 1;
      }
    },
    addCommentToBlog: (state, action) => {
      const { blogId, content } = action.payload;
      const blog = state.blogs.find((blog) => blog.id === blogId);
      if (blog) {
        blog.comments.push(content);
      }
    },
  },
});

export const {
  fetchBlogs,
  addBlog,
  fetchBlog,
  likeBlog,
  deleteABlog,
  addCommentToBlog,
} = blogSlice.actions;

export default blogSlice.reducer;
