import React from 'react';

const SearchBar = ({ searchTerm, handleSearch, handleSearchSubmit }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <input
      type="text"
      className="border rounded p-2 w-full mb-4"
      placeholder="Search by name"
      value={searchTerm}
      onChange={handleSearch}
      onKeyDown={handleKeyDown}
      onBlur={handleSearchSubmit}
    />
  );
};

export default SearchBar;
