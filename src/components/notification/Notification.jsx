import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideNotification } from "../../redux/reducers/notification/notificationReducer";

const Notification = () => {
  const notification = useSelector((state) => state.notification.notification);
  const isError = useSelector((state) => state.notification.isError);
  const success = useSelector((state) => state.notification.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(hideNotification());
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [success, dispatch]);

  return (
    <div className="notification-wrap">
      {isError ? (
        <p className="error">{notification}</p>
      ) : (
        <p className="success">{notification}</p>
      )}
    </div>
  );
};

export default Notification;
