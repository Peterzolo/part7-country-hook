import React, { useEffect, useState } from "react";
import { deleteBlog, getAllBlogs } from "../../services/blog.service";

import "../blog/Blog.css";
const BlogList = ({ user, setLoggedIn }) => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
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

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoggedIn(false);
  };

  const handleToggleDetails = (blog) => {
    if (selectedBlog && selectedBlog.id === blog.id) {
      setSelectedBlog(null);
    } else {
      setSelectedBlog(blog);
    }
  };

  return (
    <div className="blog-wrapper">
      <div className="user-logout">
        <p className="desc">You are logged in as {user.name}</p>
      </div>
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
