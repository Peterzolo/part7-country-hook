import React, { useEffect } from "react";
import { getUserFromService } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  hideNotification,
  showError,
  showSuccess,
} from "../../redux/reducers/notification/notificationReducer";

const UserDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const fetchUserDetails = async () => {
      const user = await dispatch(getUserFromService(id));
      console.log("DETAIL USER", user);
      if (user) {
        dispatch(showSuccess("user fetched successfully"));
        setTimeout(() => {
          dispatch(hideNotification());
        }, 5000);
        // navigate(`/`);
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
    <div>
      <h2 className="user-detail-title">User Detail</h2>
    </div>
  );
};

export default UserDetails;
