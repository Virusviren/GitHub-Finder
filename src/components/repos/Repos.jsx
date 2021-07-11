import React from 'react';
import ReposItem from './ReposItem';
import uniqid from 'uniqid';

const Repos = ({ repos }) => {
  console.log(repos);
  return repos.map((repo) => {
    return <ReposItem repo={repo} key={uniqid()} />;
  });
};

export default Repos;
