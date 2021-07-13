import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';

const Search = ({ showAlert }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === '') {
      showAlert('Please enter Something', 'light');
    } else {
      githubContext.searchUser(text);
      setText('');
    }
  };
  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
