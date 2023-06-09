import { useEffect, useState } from 'react';

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        <div>
          <h1>List Of Users</h1>
          {users.map((user) => (
            <div key={user.id}>{user.username}</div>
          ))}
        </div>
      ) : (
        <span>No Users</span>
      )}
    </div>
  );
};
