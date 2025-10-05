import { useState } from "react";


export default function SearchBar() {
  const [query, setQuery] = useState("");

  // Hardcoded data
  const data = [
    "Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "Diana Prince",
    "Ethan Hunt",
    "Fiona Scott",
    "George Miller",
    "Hannah Lee",
  ];

  // Filtered results
  const filtered = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Search names..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="searchInput"
      />

      {query && (
        <div className="searchResults">
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <p key={index} className="searchItem">
                {item}
              </p>
            ))
          ) : (
            <p className="noResult">No results found</p>
          )}
        </div>
      )}
    </div>
  );
}
