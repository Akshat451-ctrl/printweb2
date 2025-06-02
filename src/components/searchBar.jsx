import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-4 relative">
      <input
        type="text"
        placeholder="Search by Order ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full py-2 px-4 border rounded-lg shadow-sm pl-10"
      />
      <FaSearch className="absolute left-3 top-3 text-gray-400" />
    </div>
  );
};

export default SearchBar;