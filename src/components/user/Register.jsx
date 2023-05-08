import React, { useState } from "react";
import Notification from "../notification/Notification";
import ErrorNotification from "../notification/ErrorNotification";
import "../../components/user/LoginForm.css";
import { userRegister } from "../../services/user.service";
import { useNavigate } from "react-router-dom";
import { userRegisterFromService } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import {
  hideNotification,
  showError,
  showSuccess,
} from "../../redux/reducers/notification/notificationReducer";

const Register = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userObject = {
        username: username,
        password: password,
        name: name,
      };

      const registeredUser = await dispatch(
        userRegisterFromService(userObject)
      );
      if (registeredUser) {
        dispatch(showSuccess("User registered successfully"));
        setTimeout(() => {
          dispatch(hideNotification());
        }, 5000);
        navigate("/login");
      } else {
        dispatch(showError("Registration failed"));
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
        <h5>Register</h5>

        <input
          className="form-input"
          type="text"
          value={username}
          placeholder="Enter username here ..."
          onChange={(event) => setUsername(event.target.value)}
        />

        <input
          className="form-input"
          type="text"
          value={name}
          placeholder="Enter name here ..."
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="form-input"
          type="password"
          value={password}
          placeholder="Enter password here ..."
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
