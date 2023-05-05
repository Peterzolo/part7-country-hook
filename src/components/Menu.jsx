import React from "react";
import { Link } from "react-router-dom";
import "../components/style/Styles.css";

const Menu = () => {
  return (
    <div className="menu-wrap">
      <div className="menu-item">
        <Link to={"/:id"}>Country</Link>
      </div>

      <div className="menu-item">
        <Link to={"/search"}>Search Country</Link>
      </div>
    </div>
  );
};

export default Menu;
