import React from 'react';

const UserList = ({ users }) => {
  return (
    <ul className="list-disc pl-5">
      {users.map(user => (
        <li key={user.id} className="text-gray-900">{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
