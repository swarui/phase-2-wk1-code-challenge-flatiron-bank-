// SearchBar.js

import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-tab">
      <h2>Search Transactions</h2>
      <input
        type="text"
        placeholder="Search by description..."
        value={searchTerm}
        onChange={handleInputChange}
        className="custom-placeholder"
      />
      <button onClick={handleSearch} className="button-56">Search</button>
    </div>
  );
};

export default SearchBar;