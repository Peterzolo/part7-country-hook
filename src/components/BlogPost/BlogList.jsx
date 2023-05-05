import React from "react";

import "../../components/BlogPost/Blog.css";
import { useResource } from "../../hooks/CustomeHook";

const BlogList = () => {
  const blogs = useResource().data;
  return (
    <div className="blog-wrapper">
      <h2 className="blog-title">Blog List</h2>
      <div className="blog-list-wrap">
        {blogs &&
          blogs.map((blog) => (
            <div key={blog.id}>
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
