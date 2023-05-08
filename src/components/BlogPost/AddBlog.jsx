import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createBlog, setToken } from "../../services";
import { useField } from "../../hooks/CustomeHook";

import "../../components/BlogPost/Blog.css";
import { useNavigate } from "react-router-dom";
import {
  hideNotification,
  showError,
  showSuccess,
} from "../../redux/reducers/notification/notificationReducer";
import { createBlogFromService } from "../../redux/actions/blogAction";

const AddBlog = () => {
  const title = useField("");
  const url = useField("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("user");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      setToken(user.token);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newBlogObject = {
        title: title.value,
        url: url.value,
      };

      const createdBlog = dispatch(createBlogFromService(newBlogObject));
      if (createdBlog) {
        dispatch(showSuccess("Blog successfully added"));
        setTimeout(() => {
          dispatch(hideNotification());
        }, 5000);
        // update component state with new blog data
        navigate(`/blogs`);
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
    <div className="add-blog-wrapper">
      <h2 className="create-blog-title">Create A Blog</h2>
      <form className="form-wrap" onSubmit={handleSubmit}>
        <input
          className="add-blog-input"
          type="text"
          name="title"
          value={title.value}
          onChange={title.onChange}
          placeholder="Add title here ...."
        />
        <input
          className="add-blog-input"
          type="text"
          name="url"
          value={url.value}
          onChange={url.onChange}
          placeholder="Add Url here ...."
        />
        <button type="submit" className="add-blog-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
