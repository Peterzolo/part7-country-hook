import {
  commentOnBlog,
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  likePost,
} from "../../services/blog.service";
import {
  addBlog,
  addCommentToBlog,
  deleteABlog,
  fetchBlog,
  fetchBlogs,
  likeBlog,
} from "../reducers/blog/blogReducer";

export const fetchBlogsFromService = () => {
  return async (dispatch) => {
    const response = await getAllBlogs();
    dispatch(fetchBlogs(response));
  };
};

export const createBlogFromService = (dataObject) => {
  return async (dispatch) => {
    try {
      const response = await createBlog(dataObject);
      dispatch(addBlog(response));
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  };
};
export const getBlogFromService = (id) => {
  return async (dispatch) => {
    const response = await getBlog(id);
    dispatch(fetchBlog(response));
  };
};

export const likeBlogFromService = (id) => {
  return async (dispatch) => {
    try {
      const result = await likePost(id);
      dispatch(likeBlog(id));
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteBlogFromService = (id) => {
  return async (dispatch) => {
    try {
      const result = await deleteBlog(id);
      dispatch(deleteABlog(id));
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};

export const commentBlogFromService = (blogId, commentText) => {
  return async (dispatch) => {
    try {
      const result = await commentOnBlog(blogId, commentText);
      dispatch(addCommentToBlog({ blogId, content: result }));
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};
