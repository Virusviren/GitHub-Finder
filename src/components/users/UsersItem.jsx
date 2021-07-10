import React from 'react';
import PropTypes from 'prop-types';

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
        <a
          href={html_url}
          className='btn btn-dark btn-sm my-1'
          target={'_blank'}
          rel='noopener noreferrer'
        >
          More
        </a>
      </div>
    </div>
  );
};
UsersItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UsersItem;
