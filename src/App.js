import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.jsx';
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const res = await axios.get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      this.setState({ users: res.data, loading: false });
      console.log(res.data);
    } catch (error) {
      console.log(error + 'VIren');
    }
  }

  render() {
    return (
      <div className='App'>
        <Navbar title={'GitHub Finder'} icon='fab fa-github' />
        <div className='container'>
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
