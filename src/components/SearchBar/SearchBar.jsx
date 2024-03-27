import { useState } from "react";

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) {
      alert("Enter some text");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search film"
          name="query"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
