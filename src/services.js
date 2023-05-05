import axios from "axios";
const baseUrl = "https://restcountries.com/v3.1";
const blogUrl = "http://localhost:5000/api/blogs";

export const getAllCountries = async () => {
  const request = await axios.get(`${baseUrl}/all`);
  return request.data;
};

export const getCountryByName = async (name) => {
  const response = await axios.get(`${baseUrl}/name/${name}`);
  return response.data[0];
};

let token = null;

export const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

export const addBlog = async (blogObject) => {
  try {
    const config = {
      headers: { Authorization: token },
    };

    const response = await axios.post(blogUrl, blogObject, config);

    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};

export const createBlog = async (blogPostData) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const bearerToken = `Bearer ${user.token}`;

  try {
    const response = await axios.post(blogUrl, blogPostData, {
      headers: {
        Authorization: bearerToken,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getAllBlogs = async () => {
  const response = await axios.get(blogUrl);
  return response.data.result;
};
