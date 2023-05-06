import { combineReducers } from "redux";
import notificationReducer from "./notification/notificationReducer";

export const rootReducer = combineReducers({
  // anecdotes: anecdoteReducer,
  notification: notificationReducer,
});
