import "./App.css";
import { Globe } from "lucide-react";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [searchCountry, setSearchCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [regain, setRegain] = useState("");

  const trimedText = searchCountry.trim();

  useEffect(() => {
    if (!trimedText) {
      setLoading(false);
      setError(null);
      setCountries("");
      setRegain("");
    }

    try {
      setLoading(true);
      setError("");

      async function fetchData() {
        const res = await fetch("https://restcountries.com/v3.1/all");

        const data = await res.json();
        return setCountries(data);
      }
    } catch {
      setError(error);
    } finally {
      setLoading(false);
    }

    fetchData();
  }, [searchCountry]);
  
  return (
    <div>
      <div className="body d-flex justify-content-center align-items-center pt-5 gap-2">
        <span>
          <Globe
            size={20}
            style={{ color: "Orange" }}
            className="align-items-center"
          />
        </span>
        <h3 className="header">Country Explorer</h3>
      </div>
      <SearchBar />
    </div>
  );
}

export default App;
