import React from 'react';

const SearchHistory = ({ searchHistory }) => {
  return (
    <ul className="list-disc pl-5">
      {searchHistory.map((term, index) => (
        <li key={index} className="text-gray-700">{term}</li>
      ))}
    </ul>
  );
};

export default SearchHistory;
