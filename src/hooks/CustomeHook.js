import { useEffect, useState } from "react";
import { getCountryByName } from "../services";
import { getAllBlogs } from "../services/blog.service";

export const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

export const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await getCountryByName(name);
        setCountry({ found: true, data: response });
      } catch (error) {
        setCountry({ found: false });
      }
    };

    if (name !== "") {
      fetchCountry();
    }
  }, [name]);

  return country;
};

export const useResource = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await getAllBlogs();
      setBlogs({ found: true, data: response });
      try {
      } catch (error) {
        setBlogs({ found: false });
      }
    };
    fetchBlogs();
  }, []);
  return blogs;
};
