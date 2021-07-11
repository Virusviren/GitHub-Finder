import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UsersItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className=' card text-center'>
      <img
        src={avatar_url}
        alt={` User ${login} `}
        className='round-img'
        style={{ width: '60px' }}
        target='_blank'
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};
UsersItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UsersItem;
