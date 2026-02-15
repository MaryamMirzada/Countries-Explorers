import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchCountry, setSearchCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        let url =
          "https://restcountries.com/v3.1/all?fields=name,flags,region,population";
        if (
          searchCountry.trim().length > 0 &&
          searchCountry.toLowerCase() !== "all"
        ) {
          url = `https://restcountries.com/v3.1/name/${searchCountry}?fields=name,flags,region,population`;
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error("Something went wrong");
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        setError(err);
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
         you can see Countries from: Africa, Americas, Asia , Europe and Oceania
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
     {!loading &&
       !error &&
       searchCountry.trim().length >
       (
         <div className="row">
           {countries.map((country) => (
             <div className="col" key={country}>
               {country.name.common} <br />
               <img src={country.flags.png} width={100} />
               <p>{country.population.toLocaleString()}</p>
             </div>
           ))}
         </div>
       )}
   </div>
 );
}

export default App;
