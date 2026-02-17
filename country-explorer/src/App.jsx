import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";


function App() {
  const [searchCountry, setSearchCountry] = useState("All");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        let url ; 
        const fetching = await fetch(
          `https://restcountries.com/v3.1/${
            searchCountry.toLowerCase() === "all"
              ? "all"
              : "name/" + searchCountry
          }?fields=name,flags,region,population`
        );

        if (!fetching.ok) throw new Error("something wrong");
        const res = await fetching.json();
        setCountries(res);
      } catch (err) {
        setError(err);
        setCountries([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [searchCountry]);
  return (
    <div className="container mt-4 mx-auto">
      <div className="header ">
        <h3 className="heading" style={{ textAlign: "center" }}>
          🌍 Country Explorer
        </h3>
        <p className="para" style={{ color: "#888", textAlign: "center" }}>
          you can see Countries from: Africa, Americas, Asia , Europe and
          Oceania
        </p>
        {loading && (
          <div className="error">
            <h3>Loading....</h3>
          </div>
        )}
        {error && <div> {error.message}</div>}
        <SearchBar
          searchCountry={searchCountry}
          setSearchCountry={setSearchCountry}
        />
      </div>
      {!loading && !error && searchCountry.trim().length > 0 && (
        <div className="row mt-5">
          {countries.map((country) => (
            <div
              className="col-12 col-md-4 col-lg-3 card text-align-center d-flex-block gap-10"
              key={country.name.common}
            >
              <h5>{country.name.common}</h5>
              <img src={country.flags.png} width="100" />
              <p>{country.region}</p>
              <p>Population: {country.population.toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;