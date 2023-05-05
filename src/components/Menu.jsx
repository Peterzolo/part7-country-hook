import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/style/Styles.css";

const Menu = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  <button type="button" onClick={handleLogout} className="logout-btn">
    Logout
  </button>;
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
        <Link to={"/register"}>Register</Link>
      </div>
      {user ? (
        <div className="menu-item" onClick={handleLogout}>
          Logout
        </div>
      ) : (
        <div className="menu-item">
          <Link to={"/login"}>Login</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
