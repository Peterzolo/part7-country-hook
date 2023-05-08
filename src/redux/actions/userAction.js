import { userRegister, userLogin } from "../../services/user.service";
import {
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
      const response = await userRegister(registerData);
      dispatch(signupSuccess(response));
    } catch (error) {
      dispatch(signupFail(error.message));
    }
  };
};

export const userLoginFromService = (loginData) => {
  return async (dispatch) => {
    dispatch(signin());
    try {
      const response = await userLogin(loginData);
      dispatch(signinSuccess(response));
    } catch (error) {
      dispatch(signinFail(error.message));
    }
  };
};