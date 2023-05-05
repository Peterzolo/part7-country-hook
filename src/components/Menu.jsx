import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/style/Styles.css";

const Menu = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("USER----", user.username);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser({});
    setIsLoggedIn(false);
    navigate("/login");
  };

  const logoutButtonText = !isLoggedIn ? "Login" : "Logout";
  return (
    <div className="menu-wrap">
      <div className="menu-item">
        <Link to={"/search"}>Search Country</Link>
      </div>
      <div className="menu-item">
        {user === {} ? (
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
      <button type="button" onClick={handleLogout} className="logout-btn">
        {logoutButtonText}
      </button>
    </div>
  );
};

export default Menu;
