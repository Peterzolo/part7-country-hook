import { combineReducers } from "redux";
import notificationReducer from "./notification/notificationReducer";
import blogReducer from "./blog/blogReducer";

export const rootReducer = combineReducers({
  blogs: blogReducer,
  notification: notificationReducer,
});
