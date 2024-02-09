import React from 'react';

const UserCRUD = ({ users, onDelete }) => {
  // Ensure users array is defined before mapping over it
  if (!users || !users.length) {
    return <p>No users found.</p>;
  }

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserCRUD;
