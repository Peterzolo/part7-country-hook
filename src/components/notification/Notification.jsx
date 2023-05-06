import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Notification.css";
import { hideNotification } from "../../redux/reducers/notification/notificationReducer";

const Notification = () => {
  const dispatch = useDispatch();
  const { notification, isError } = useSelector((state) => state.notification);

  useEffect(() => {
    if (notification) {
      const timeoutId = setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [notification, dispatch]);

  return (
    <div className={`notification ${isError ? "error" : "success"}`}>
      {notification}
    </div>
  );
};

export default Notification;
