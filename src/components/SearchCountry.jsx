import React, { useState } from "react";
import { useCountry, useField } from "../hooks/CustomeHook";
import CountryDetail from "./CountryDetail";

import "../components/style/Styles.css";

const SearchCountry = () => {
  const nameInput = useField("text");
  const [name, setName] = useState("");
  const country = useCountry(name);

  const fetch = (e) => {
    e.preventDefault();
    setName(nameInput.value);
  };

  return (
    <div className="search-wrap">
      <form onSubmit={fetch} className="search-form">
        <input
          {...nameInput}
          className="search-input"
          placeholder="Type a county's name here"
        />
        <button className="search-btn">find</button>
      </form>
      <div className="country-detail">
        <CountryDetail country={country} />
      </div>
    </div>
  );
};

export default SearchCountry;
