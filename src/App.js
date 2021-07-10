import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.jsx';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  // async componentDidMount() {
  //   try {
  //     this.setState({ loading: true });
  //     const res = await axios.get(
  //       `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
  //       &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );
  //     this.setState({ users: res.data, loading: false });
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error + 'VIren');
  //   }
  // }

  //Search Github Users
  searchUser = async (text) => {
    console.log(text);
    this.setState({ loading: true });
    try {
      this.setState({ loading: true });
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      this.setState({ users: res.data.items, loading: false });
      console.log(res.data);
    } catch (error) {
      console.log(error + 'VIren');
    }
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    console.log(msg, type);
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  render() {
    return (
      <div className='App'>
        <Navbar title={'GitHub Finder'} icon='fab fa-github' />

        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search
            searchUser={this.searchUser}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
