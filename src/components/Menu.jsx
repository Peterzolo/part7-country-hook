import React from "react";
import { Link } from "react-router-dom";
import "../components/style/Styles.css";
const user = JSON.parse(localStorage.getItem("user"));

const Menu = () => {
  return (
    <div className="menu-wrap">
      <div className="menu-item">
        <Link to={"/search"}>Search Country</Link>
      </div>
      <div className="menu-item">
        {user ? (
          <Link to={"/blogs/create"}>Add Blog</Link>
        ) : (
          <Link to={"/login"}>Add Blog</Link>
        )}
      </div>
      <div className="menu-item">
        <Link to={"/blogs"}>Blogs</Link>
      </div>
      <div className="menu-item">
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default Menu;
