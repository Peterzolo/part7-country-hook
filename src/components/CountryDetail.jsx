import "../components/style/Styles.css";

const CountryDetail = ({ country }) => {
  if (!country) {
    return null;
  }

  if (!country.found) {
    return <div>not found...</div>;
  }

  return (
    <div>
      <h3 className="country-title">Country Details</h3>
      <div className="sub-container">
        <h3>Name:</h3>
        <h3>{country?.data?.name.common} </h3>
      </div>
      <div className="sub-container">
        <h3>Capital:</h3>
        <h3>{country?.data?.capital} </h3>
      </div>

      <div className="sub-container">
        <h3>Population:</h3>
        <h3>{country?.data?.population} </h3>
      </div>

      <div className="sub-container">
        <h3>Flag:</h3>

        <img
          src={country.data.flags.png}
          height="100"
          alt={`flag of ${country.data.name.common}`}
        />
      </div>
    </div>
  );
};

export default CountryDetail;
