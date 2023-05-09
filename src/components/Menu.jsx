import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/style/Styles.css";

const Menu = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const logoutButtonText = isLoggedIn ? "Logout" : "Login";
  return (
    <div className="menu-wrap">
      <div className="menu-item">
        <Link to={"/search"} className="link-item">
          Search Country
        </Link>
      </div>
      <div className="menu-item">
        {isLoggedIn ? (
          <Link to={"/blogs/create"} className="link-item">
            Add Blog
          </Link>
        ) : (
          <Link to={"/login"} className="link-item">
            Add Blog
          </Link>
        )}
      </div>
      <div className="menu-item">
        <Link to={"/"} className="link-item">
          Blogs
        </Link>
      </div>

      <div className="menu-item">
        <Link to={"/register"} className="link-item">
          Register
        </Link>
      </div>
      <div className="loggedin-user">
        {isLoggedIn && (
          <div className="user-name">
            <Link to={"/users"} className="link-item">
              Users
            </Link>
          </div>
        )}
      </div>
      <div className="loggedin-user">
        {isLoggedIn && (
          <div className="user-name">logged in as : {user.name}</div>
        )}
      </div>
      <button type="button" onClick={handleLogout} className="logout-btn">
        {logoutButtonText}
      </button>
    </div>
  );
};

export default Menu;
