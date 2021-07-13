import React, { useContext } from 'react';
import UsersItem from './UsersItem';
import uniqid from 'uniqid';
import Spinner from '../layout/Spinner.jsx';
import GithubContext from '../../context/github/GithubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  }
  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UsersItem key={uniqid()} user={user} />
      ))}
    </div>
  );
};
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
