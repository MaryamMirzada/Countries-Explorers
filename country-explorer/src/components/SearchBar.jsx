import { Search, X } from "lucide-react";
import SuggestCountry from "./SuggestCountry";
export default function SearchBar({ searchCountry, setSearchCountry }) {
  const hasText = searchCountry.trim().length > 0;
  return (
    <div>
      <div
        className="input mt-3 d-flex gap-2 justify-content-center align-items-center "
        style={{ textAlign: "center" }}
      >
        <span>
          <Search size={20} color="blue" />
        </span>
        <input
          type="text"
          placeholder="Search Country...."
          onChange={(e) => setSearchCountry(e.target.value)}
          value={searchCountry}
          style={{ width: 440, height: 40 }}
        />
        {hasText ? (
          <button
            className="btn btn-primary"
            style={{ height: 40 }}
            onClick={() => setSearchCountry("")}
          >
            <X size="20" />
          </button>
        ) : (
          ""
        )}
      </div>
      <SuggestCountry country={searchCountry} setCountry={setSearchCountry} />
    </div>
  );
}
