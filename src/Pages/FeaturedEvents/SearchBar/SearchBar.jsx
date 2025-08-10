import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const handleChange = (e) => {
    onSearchChange(e.target.value.toLowerCase());
  };

  return (
    <div className="w-full mb-6 flex justify-center lg:justify-start">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search by name or location..."
        className="w-11/12 sm:w-3/4 lg:w-1/2 px-4 py-3 border border-base-content focus:border-accent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent transition duration-200"
      />

    </div>
  );
};

export default SearchBar;
