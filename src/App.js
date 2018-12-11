import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

import ItemIndex from "./components/itemIndex";
import itemDetails from "./components/itemDetails";
import Signup from "./components/Signup";
import UserService from "./services/UserService";
import Login from "./components/Login";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

library.add(faStroopwafel);
library.add(faPen);


class App extends Component {
  state = {
    loggedInUser: null
  }
  service = new UserService()



  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then(theActualUserFromDB => {
          this.setState({
            loggedInUser: theActualUserFromDB
          })

        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          })
        })
    }
  }



  logInTheUser = (userToLogIn) => {
    this.setState({ logInTheUser: userToLogIn })
  }



  showUser = () => {
    if (this.state.loggedInUser) {
      return (
        <div>Welcome, {this.state.loggedInUser.username}</div>
      )
    }
  }


  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    })
  }
  render() {
    return <div className="App">
          <nav>
            <ul>
              <li>
            <Link to="/itemList"> View Items List</Link>
            </li>
            <li>
            <Link to="/signup"> Sign Up For Account</Link>
            </li>
            <li> 
            <Link to="/login"> Login </Link>
              </li>
            </ul>
          </nav>


{/* -=-=-=-=-= ROUTES ROOM   =-=--=-=-=-=*/}
        <Switch>
          <Route path="/itemList" render={props => <ItemIndex {...props} currentUser ={this.state.loggedInUser} />} />
        <Route path="/items/details/:id" component={itemDetails} />
          
          <Route path="/signup" render={(props) => <Signup {...props}/>} />
        <Route path="/login" render={(props) => <Login {...props}/> }/>
        </Switch>
 {/* -==--==--=-=ROUTES ROOM ENDS -=-==--=-=-= */}
      </div>;
  }
}

export default App;
