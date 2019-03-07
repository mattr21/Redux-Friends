import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './styles/App.css';
import Login from './components/Login' 
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <button><Link to="/login">Login</Link></button>
          <button><Link to="/friends-list">Friend's List</Link></button>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/friends-list" component={FriendsList} />
        </div>
      </Router>
    );
  }
}

export default App;
