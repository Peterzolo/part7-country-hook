import axios from "axios";

const baseUrl = "http://localhost:5000/api";

export const loginUser = async (userObject) => {
  const response = await axios.post(`${baseUrl}/login`, userObject);
  return response.data;
};
export const registerUser = async (userObject) => {
  const response = await axios.post(`${baseUrl}/users`, userObject);
  console.log("REGISTER", response.data);
  return response.data;
};
