import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserFromService } from "../../redux/actions/userAction";
import Table from "react-bootstrap/Table";

import "../user/LoginForm.css";

const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  console.log("SELECTOR USERS", users);
  useEffect(() => {
    dispatch(getAllUserFromService());
  }, [dispatch]);
  return (
    <div className="user-list-wrap">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Author's Name</th>
            <th>Blogs created</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.blogs.length}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      {/* <table>
        <thead className="table-head">
          <tr>
            <th>Author</th>
            <th>Created blogs</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.blogs.length}</td>
              </tr>
            ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default UserList;
