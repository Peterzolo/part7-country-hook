import React, { useEffect, useState } from "react";

import "../../components/BlogPost/Blog.css";
import { getAllBlogs } from "../../services";

const BlogList = ({ user, setLoggedIn }) => {
  const [blogs, setBlogs] = useState([]);
  const [sortedBlogs, setSortedBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getAllBlogs();
      setBlogs(response);
      const sortedResponse = [...response].sort((a, b) => b.likes - a.likes);
      setSortedBlogs(sortedResponse);
    }
    fetchData();
  }, []);

  return (
    <div className="blog-wrapper">
      <h2 className="blog-title">Blog List</h2>
      <div className="blog-list-wrap">
        {sortedBlogs &&
          sortedBlogs.map((blog) => (
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
