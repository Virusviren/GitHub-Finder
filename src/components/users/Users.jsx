import React from 'react';
import UsersItem from './UsersItem';
import uniqid from 'uniqid';
import Spinner from '../layout/Spinner.jsx';

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UsersItem key={uniqid()} user={user} />
        ))}
      </div>
    );
  }
};
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
