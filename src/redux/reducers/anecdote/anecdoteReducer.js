import { createSlice } from "@reduxjs/toolkit";
import { voteAnecdoteAction } from "../../../services/anecdoteService";

const initialState = {
  blogs: [],
  blog: {},
};

const blogSlice = createSlice({
  name: "anecdotes",
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
