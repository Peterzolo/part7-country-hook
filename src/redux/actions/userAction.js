import { userRegister } from "../../services/user.service";
import { register } from "../reducers/user/userReducer";

export const userRegisterFromService = (registerData) => {
  return async (dispatch) => {
    const response = await userRegister(registerData);
    dispatch(register(response));
  };
};
export const userLoginFromService = (loginData) => {
  return async (dispatch) => {
    const response = await userRegister(loginData);
    dispatch(register(response));
  };
};
