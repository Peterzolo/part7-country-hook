import { createBlog, getAllBlogs, getBlog } from "../../services/blog.service";
import { addBlog, fetchBlogs } from "../reducers/blog/blogReducer";

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
    dispatch(addBlog(response));
  };
};
