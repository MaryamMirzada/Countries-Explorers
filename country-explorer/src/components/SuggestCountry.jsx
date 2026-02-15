export default function SuggestCountry({ country, setCountry }) {
  const countries = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className="container mt-4" style={{ textAlign: "center" }}>
      <select
        value={country}
        className="select-form"
        onChange={(e) => setCountry(e.target.value)} // درست
        style={{ width: 200, height: 40 }}
      >
        {countries.map((count) => (
          <option value={count} key={count}>
            {count}
          </option>
        ))}
      </select>
    </div>
  );
}
