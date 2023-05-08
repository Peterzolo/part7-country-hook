import React, { useState } from "react";
import Notification from "../notification/Notification";
import ErrorNotification from "../notification/ErrorNotification";

import "../../components/user/LoginForm.css";
import { setToken } from "../../services/blog.service";
import { useNavigate } from "react-router-dom";
import { userRegisterFromService } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import {
  hideNotification,
  showError,
  showSuccess,
} from "../../redux/reducers/notification/notificationReducer";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userObject = {
        username: username,
        password: password,
      };
      const createdBlog = dispatch(userRegisterFromService(userObject));
      if (createdBlog) {
        dispatch(showSuccess("Blog successfully added"));
        setTimeout(() => {
          dispatch(hideNotification());
        }, 5000);
        // update component state with new blog data
        navigate(`/`);
      } else {
        dispatch(showError("Could not add blog"));
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
