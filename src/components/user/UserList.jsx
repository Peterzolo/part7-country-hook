import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserFromService } from "../../redux/actions/userAction";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getAllUserFromService());
  }, [dispatch]);
  return (
    <div>
      <h1>User List</h1>
      {users &&
        users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
    </div>
  );
};

export default UserList;
