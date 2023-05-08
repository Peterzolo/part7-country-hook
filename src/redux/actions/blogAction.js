import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  likePost,
} from "../../services/blog.service";
import {
  addBlog,
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
    const response = await createBlog(dataObject);
    dispatch(addBlog(response));
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
      console.log("RESULT", result);
      dispatch(likeBlog(id));
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteBlogFromService = (id) => {
  return async (dispatch) => {
    try {
      const result = await deleteBlog(id);
      console.log("RESULT", result);
      dispatch(deleteABlog(id));
    } catch (error) {
      console.log(error);
    }
  };
};
