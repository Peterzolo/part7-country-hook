import { combineReducers } from "redux";
import notificationReducer from "./notification/notificationReducer";
import blogReducer from "./blog/blogReducer";
import userReducer from "./user/userReducer";

export const rootReducer = combineReducers({
  blogs: blogReducer,
  notification: notificationReducer,
  users: userReducer,
});
