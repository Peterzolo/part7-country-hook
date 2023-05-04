import axios from "axios";
const baseUrl = "https://restcountries.com/v3.1";

export const getAllCountries = async () => {
  const request = await axios.get(`${baseUrl}/all`);
  return request.data;
};

export const getCountryByName = async (name) => {
  const response = await axios.get(`${baseUrl}/name/${name}`);
  return response.data[0];
};
