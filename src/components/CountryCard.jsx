import React from "react";

function CountryCard({ name, population, region, capital, img }) {
  return (
    <div className="col">
      <div
        className="card shadow-sm rounded mt-4 grow"
        style={{ width: "15rem" }}
      >
        <img src={img} alt="bandera_img" />
        <div className="card-body">
          <h5 className="card-title">Pais: {name}</h5>
          <p className="card-text">Population: {population}</p>
          <p className="card-text">Region: {region}</p>
          <p className="card-text">Capital: {capital}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
