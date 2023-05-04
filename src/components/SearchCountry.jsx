import React, { useState } from "react";
import { useCountry, useField } from "../hooks/CustomeHook";
import CountryDetail from "./CountryDetail";

const SearchCountry = () => {
  const nameInput = useField("text");
  const [name, setName] = useState("");
  const country = useCountry(name);

  const fetch = (e) => {
    e.preventDefault();
    setName(nameInput.value);
  };

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>
      <div className="country-detail">
        <CountryDetail country={country} />
      </div>
    </div>
  );
};

export default SearchCountry;
