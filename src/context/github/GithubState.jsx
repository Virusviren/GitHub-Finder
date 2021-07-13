import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import {
  SERACH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
} from '../types';

let githubClientId;
let githubClientSecret;
if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
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
        `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}
        &client_secret=${githubClientSecret}`
      );
      // setUsers(res.data.items);
      dispatch({ type: SERACH_USERS, payload: res.data.items });

      //console.log(res.data);
    } catch (error) {
      console.log(error + 'Viren');
    }
  };
  //Get Users
  //Get the Single GithubUser
  const getUser = async (username) => {
    try {
      setLoading();
      const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=${githubClientId}
        &client_secret=${githubClientSecret}`
      );
      dispatch({ type: GET_USER, payload: res.data });

      console.log(res.data);
    } catch (error) {
      console.log(error + 'VIren');
    }
  };
  //Get Repos
  const getUserRepos = async (username) => {
    try {
      setLoading();
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}
        &client_secret=${githubClientSecret}`
      );
      dispatch({ type: GET_REPOS, payload: res.data });

      console.log(res.data + 'From App');
    } catch (error) {
      console.log(error + 'VIren');
    }
  };
  //Clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
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
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
