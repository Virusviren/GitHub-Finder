import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar.jsx';
import Home from './components/pages/Home';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import NotFound from './components/pages/NotFound';
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar title={'GitHub Finder'} icon='fab fa-github' />

            <div className='container'>
              <Alert alert={alert} />
              <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

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
