import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogsFromService } from "../../redux/actions/blogAction";

import "../../components/BlogPost/Blog.css";

const BlogList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);

  useEffect(() => {
    dispatch(fetchBlogsFromService());
  }, [dispatch]);

  return (
    <div className="blog-wrapper">
      <h2 className="blog-title">Blog List</h2>
      <div className="blog-list-wrap">
        {blogs &&
          blogs.map((blog) => (
            <div key={blog.id} className="list-wrap">
              <ul className="blog-body">
                <li className="blog-list">
                  <h5>{blog.title}</h5>{" "}
                </li>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogList;
