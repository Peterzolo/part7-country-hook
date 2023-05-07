import {
  createBlog,
  getAllBlogs,
  getBlog,
  likePost,
} from "../../services/blog.service";
import {
  addBlog,
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
    const response = await likePost(id);
    dispatch(likeBlog(response));
  };
};
