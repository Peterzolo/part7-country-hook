import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogsFromService } from "../../redux/actions/blogAction";

import "../../components/BlogPost/Blog.css";
import { Link, useParams } from "react-router-dom";

const BlogList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const { id } = useParams();
  console.log("BLOG ID", id);

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
                  <Link to={`/blogs/${blog.id}`}>
                    <h5>{blog.title}</h5>
                  </Link>
                </li>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogList;
