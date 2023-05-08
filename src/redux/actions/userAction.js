import {
  signupSuccess,
  signupFail,
  signinSuccess,
  signinFail,
} from "../reducers/auth/authReducer";
import { userRegister, userLogin } from "../../services/user.service";

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
