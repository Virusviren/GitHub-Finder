import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import { SERACH_USERS, SET_LOADING, CLEAR_USERS, GET_REPOS } from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search Users
  const searchUser = async (text) => {
    try {
      setLoading();
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      // setUsers(res.data.items);
      dispatch({ type: SERACH_USERS, payload: res.data.items });

      //console.log(res.data);
    } catch (error) {
      console.log(error + 'Viren');
    }
  };
  //Get Users
  //Get Repos
  //Clear Repos
  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUser,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
