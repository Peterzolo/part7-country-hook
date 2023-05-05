import React from "react";
import { Link } from "react-router-dom";
import "../components/style/Styles.css";

const Menu = () => {
  return (
    <div className="menu-wrap">
      <div className="menu-item">
        <Link to={"/search"}>Search Country</Link>
      </div>
      <div className="menu-item">
        <Link to={"/blogs/create"}>Add Blog</Link>
      </div>
      <div className="menu-item">
        <Link to={"/blogs"}>Blogs</Link>
      </div>
    </div>
  );
};

export default Menu;
