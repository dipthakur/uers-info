import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import SearchHistory from './components/SearchHistory';
import SortButton from './components/SortButton';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('searchHistory'));
    if (storedHistory) {
      setSearchHistory(storedHistory);
    }
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (!searchHistory.includes(searchTerm) && searchTerm) {
      const updatedHistory = [...searchHistory, searchTerm];
      setSearchHistory(updatedHistory);
      localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    }
    setShowHistory(true);
  };

  const handleSort = () => {
    setIsSorted(!isSorted);
    setUsers([...users].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">User List</h1>
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} handleSearchSubmit={handleSearchSubmit} />
        <SortButton handleSort={handleSort} />
        {showHistory && (
          <>
            <h2 className="text-2xl font-semibold mt-6 mb-2 text-center">Past Search Terms</h2>
            <SearchHistory searchHistory={searchHistory} />
          </>
        )}
        <UserList users={filteredUsers} />
      </div>
    </div>
  );
}

export default App;
