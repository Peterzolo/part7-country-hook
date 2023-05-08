import React, { useEffect } from "react";
import { getUserFromService } from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  hideNotification,
  showError,
  showSuccess,
} from "../../redux/reducers/notification/notificationReducer";

const UserDetails = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const user = await dispatch(getUserFromService(id));
      if (user) {
        dispatch(showSuccess("user fetched successfully"));
        setTimeout(() => {
          dispatch(hideNotification());
        }, 5000);
      } else {
        dispatch(showError("Fetch  failed"));
        setTimeout(() => {
          dispatch(hideNotification());
        }, 5000);
      }
    };
    fetchUserDetails();
  }, [dispatch, id]);
  return (
    <div className="user-detail-wrap">
      <h2 className="user-detail-title">User Detail</h2>
      <div className="content-wrap">
        <h4 className="author-name">{user.name}</h4>
        <div>
          <h4>Added blogs</h4>
          {user && user.blogs && (
            <div className="author-name">
              <ul>
                {user.blogs.map((blog) => (
                  <li key={blog.id}>{blog.title}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
