import React from "react";
import styled from "styled-components";

function SearchBox({ busqueda, setBusqueda }) {
  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };
  return (
    <div className="form-group">
      <i className="fas fa-search"></i>
      <input
        type="text"
        style={{ width: "50%" }}
        className="form-control shadow-sm"
        placeholder="Search for a country..."
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
