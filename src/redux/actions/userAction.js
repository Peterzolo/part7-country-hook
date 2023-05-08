import {
  fetchAUser,
  fetchAllUsers,
  loginUser,
  registerUser,
} from "../../services/user.service";
import {
  getAllUserFail,
  getAllUserSuccess,
  getAllUsers,
  getUser,
  getUserFail,
  getUserSuccess,
  signin,
  signinFail,
  signinSuccess,
  signup,
  signupFail,
  signupSuccess,
} from "../reducers/user/userReducer";

export const userRegisterFromService = (registerData) => {
  return async (dispatch) => {
    dispatch(signup());
    try {
      const response = await registerUser(registerData);

      dispatch(signupSuccess(response));
      return response;
    } catch (error) {
      dispatch(signupFail(error.message));
    }
  };
};

export const userLoginFromService = (loginData) => {
  return async (dispatch) => {
    dispatch(signin());
    try {
      const response = await loginUser(loginData);
      dispatch(signinSuccess(response));
      return response;
    } catch (error) {
      dispatch(signinFail(error.message));
    }
  };
};

export const getUserFromService = (id) => {
  return async (dispatch) => {
    dispatch(getUser());
    try {
      const response = await fetchAUser(id);
      console.log("ACTION USER", response);
      dispatch(getUserSuccess(response));
      return response;
    } catch (error) {
      dispatch(getUserFail(error.message));
    }
  };
};
export const getAllUserFromService = (id) => {
  return async (dispatch) => {
    dispatch(getAllUsers());
    try {
      const response = await fetchAllUsers(id);
      console.log("ACTION USERs", response);
      dispatch(getAllUserSuccess(response));
      return response;
    } catch (error) {
      dispatch(getAllUserFail(error.message));
    }
  };
};
