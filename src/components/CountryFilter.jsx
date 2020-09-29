import React from "react";

function CountryFilter({ filter, setFilter }) {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <select
      style={{
        width: "50%",
        marginTop: "24px",
        position: "relative",
        right: "0",
      }}
      className="custom-select shadow-sm"
      name="country"
      id="country"
      onChange={handleChange}
    >
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}

export default CountryFilter;
