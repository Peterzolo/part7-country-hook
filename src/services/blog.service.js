import axios from "axios";

const baseUrl = "http://localhost:5000/api/blogs";

let token = null;

export const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

export const addBlog = async (blogObject) => {
  try {
    const config = {
      headers: { Authorization: token },
    };

    const response = await axios.post(baseUrl, blogObject, config);

    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};

export const createBlog = async (blogPostData) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const bearerToken = `Bearer ${user.token}`;

  try {
    const response = await axios.post(baseUrl, blogPostData, {
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
  const response = await axios.get(baseUrl);
  return response.data.result;
};

export const likePost = async (blogId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const bearerToken = `Bearer ${user.token}`;

  try {
    const response = await axios.put(
      `${baseUrl}/${blogId}/like`,
      {},
      {
        headers: {
          Authorization: bearerToken,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error?.response?.data);
  }
};

export const commentOnBlog = async (blogId, commentText) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const bearerToken = `Bearer ${user.token}`;

  try {
    const response = await axios.post(
      `${baseUrl}/${blogId}/comment`,
      { content: commentText },
      {
        headers: {
          Authorization: bearerToken,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error?.response?.data);
  }
};

export const deleteBlog = async (blogId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const bearerToken = `Bearer ${user.token}`;

  const response = await axios.delete(`${baseUrl}/delete/${blogId}`, {
    headers: {
      Authorization: bearerToken,
    },
  });

  return response;
};

export const getBlog = async (blogId) => {
  const response = await axios.get(`${baseUrl}/${blogId}`);
  return response.data.result;
};
