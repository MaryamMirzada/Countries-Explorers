import { Search, X } from "lucide-react";
import SuggestCountry from "./SuggestCountry";

export default function SearchBar({ searchCountry, setSearchCountry }) {
  const hasText = searchCountry.trim().length > 0;
  return (
    <div>
      <div className="glass mt-2 d-flex ">
        <span>
          <Search size={20} style={{ color: "orange" }} />
        </span>
        <input
          type="text"
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
          placeholder="Search Country"
          className="flex-grow-1 mx-2"
        />
        {hasText ? (
          <button onClick={() => setSearchCountry("")}>
            <X size={16} />
          </button>
        ) : null}
      </div>
      <SuggestCountry setSearchCountry={{ setSearchCountry }} />
    </div>
  );
}
