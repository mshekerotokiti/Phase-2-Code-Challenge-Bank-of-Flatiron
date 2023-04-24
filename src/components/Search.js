import React from "react";

function Search({ search, setSearch}) {                              
  return (
    <div className="search-form-button">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(e) => setSearch(e.target.value)}                                 
        value={search}
      />
    </div>
  );
}

export default Search;
