import React, { useState } from 'react';

const Search = ({ searchUser, showAlert, showClear, clearUsers }) => {
  const [text, setText] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === '') {
      showAlert('Please enter Something', 'light');
    } else {
      searchUser(text);
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
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
