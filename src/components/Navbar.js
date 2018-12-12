import React, { Component } from 'react';
import "../App.css";
import { Route, Switch, Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-div">
        <nav className="nav-link-container">
          <p>Logo</p>

          <Link to="/">Home Page</Link>
          <Link to="/user/signup"
          >Sign Up</Link>
          <Link to="/user/login">Log in</Link>
          <Link to="/" onClick={this.props.logUserOut}> Logout </Link>
          <Link to="/itemList">View item list</Link>

        </nav>
      </div>
    )
  }
}

export default Navbar;