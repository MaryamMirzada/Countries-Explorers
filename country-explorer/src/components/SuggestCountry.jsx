export default function SuggestCountry({ setSearchCountry }) {
  const Countries = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <div className="glass d-flex flex-wrap gap-2 bg-primary">
      {Countries.map((country) => (
        <button id={country} type="button" onClick={setSearchCountry(country)}>
          {country}
        </button>
      ))}
    </div>
  );
}
