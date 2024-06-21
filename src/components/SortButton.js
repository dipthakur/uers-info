import React from 'react';

const SortButton = ({ handleSort }) => {
  return <button className="bg-blue-500 text-white rounded py-2 px-4 mb-4" onClick={handleSort}>Sort by Name</button>;
};

export default SortButton;
