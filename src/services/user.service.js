import axios from "axios";

const baseUrl = "http://localhost:5000/api";

let token = null;

export const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

export const loginUser = async (userObject) => {
  const response = await axios.post(`${baseUrl}/login`, userObject);
  console.log("RESPONSE", response.data);
  return response.data;
};
export const registerUser = async (userObject) => {
  const response = await axios.post(`${baseUrl}/users`, userObject);
  console.log("REGISTER", response.data);
  return response.data;
};
