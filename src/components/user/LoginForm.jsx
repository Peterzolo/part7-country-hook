import React, { useState } from "react";

import "../../components/user/LoginForm.css";
import { useNavigate } from "react-router-dom";
import { userLoginFromService } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import {
  hideNotification,
  showError,
  showSuccess,
} from "../../redux/reducers/notification/notificationReducer";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("IS LOGGED IN", isLoggedIn);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userObject = {
        username: username,
        password: password,
      };
      const loggedInUser = await dispatch(userLoginFromService(userObject));
      if (loggedInUser) {
        window.localStorage.setItem("user", JSON.stringify(loggedInUser));
        setUser(loggedInUser);
        setIsLoggedIn(true);
        dispatch(showSuccess("Login successful"));
        setTimeout(() => {
          dispatch(hideNotification());
        }, 5000);
        navigate(`/`);
      } else {
        dispatch(showError("Login failed"));
        setTimeout(() => {
          dispatch(hideNotification());
        }, 5000);
      }
    } catch (error) {
      dispatch(showError(error.message));
      setTimeout(() => {
        dispatch(hideNotification());
      }, 5000);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-wrap">
        <h5>LogIn Form</h5>
        <input
          className="form-input"
          type="text"
          value={username}
          placeholder="Enter username here ..."
          onChange={(event) => setUsername(event.target.value)}
        />

        <input
          className="form-input"
          type="password"
          value={password}
          placeholder="Enter password here ..."
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
