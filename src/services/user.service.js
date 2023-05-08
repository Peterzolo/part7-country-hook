import axios from "axios";

const baseUrl = "http://localhost:5000/api/users";
const loginUrl = "http://localhost:5000/api/";

let token = null;

export const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

export const loginUser = async (userObject) => {
  const response = await axios.post(`${loginUrl}/login`, userObject);

  return response.data;
};
export const registerUser = async (userObject) => {
  const response = await axios.post(baseUrl, userObject);

  return response.data;
};
export const fetchAUser = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  console.log("FETCH USER", response.data);
  return response.data.result;
};
export const fetchAllUsers = async () => {
  const response = await axios.get(baseUrl);
  console.log("FETCH USERS", response);
  return response.data;
};
