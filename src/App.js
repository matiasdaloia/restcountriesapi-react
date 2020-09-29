import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./index.css";
import CountryFilter from "./components/CountryFilter";
import SearchBox from "./components/SearchBox";
import CountryCard from "./components/CountryCard";
import axios from "axios";
import { logDOM } from "@testing-library/react";

function App() {
  const [resultado, setResultado] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const obtenerPaises = async () => {
      const url = "https://restcountries.eu/rest/v2/all";
      const datos = await axios.get(url);
      setResultado(datos.data);
    };
    obtenerPaises();
  }, []);

  // Setear el filtro por searchbox:
  const filteredCountries = resultado.filter((result) => {
    return result.name.toLowerCase().includes(busqueda.toLowerCase());
  });

  const filteredCountriesByFilter = resultado.filter((result) => {
    return result.region.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <SearchBox busqueda={busqueda} setBusqueda={setBusqueda} />
          </div>
          <div className="col-lg-6 mr-auto">
            <CountryFilter filter={filter} setFilter={setFilter} />
          </div>
        </div>
        <div className="row">
          {filter === ""
            ? filteredCountries.map((result) => {
                return (
                  <CountryCard
                    key={result.id}
                    img={result.flag}
                    name={result.name}
                    population={result.population}
                    region={result.region}
                    capital={result.capital}
                  />
                );
              })
            : filteredCountriesByFilter.map((result) => {
                return (
                  <CountryCard
                    key={result.id}
                    img={result.flag}
                    name={result.name}
                    population={result.population}
                    region={result.region}
                    capital={result.capital}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default App;
