import "./App.css";
import { Globe } from "lucide-react";
import SearchBar from "./components/SearchBar";

function App() {
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
