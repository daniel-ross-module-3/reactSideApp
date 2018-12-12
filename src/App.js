import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

import Navbar from './components/Navbar'
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


  componentDidMount(props) {
    this.fetchUser();
  }


  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then(theActualUserFromDB => {
          this.setState({
            loggedInUser: theActualUserFromDB
          })

        })
        .catch(err => {
          console.log('catch getting hit', err)
          this.setState({
            loggedInUser: false
          })
        })
    }
  }

  logInTheUser = (userToLogIn) => {
    // console.log('this is before',this.state.loggedInUser)



    this.setState({ loggedInUser: userToLogIn })
    // console.log('this is after',this.state.loggedInUser)

  }

  showUser = () => {
    console.log(this)

    if (this.state.loggedInUser) {
      // console.log('you are logged in', this.state.loggedInUser)
      return (
        <div>

        <h4>Welcome, {this.state.loggedInUser.username}</h4>

        </div>
        )
    } else {
      return (
        <div className="applicationInfoDiv">

          <div className="paragraphAboutApp">

            <h1>Welcome</h1>
            <p className="paragraphAboutAppText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
          </div>
        </div>

      )


    }
  }

  // hideHeader = () =>{
  //   this.setState({
  //     showHeader: false,

  //   })
  // }

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      console.log('you triggered the logout function', this.state.loggedInUser);
    })
  }
  render() {
    return <div className="App">
      <Navbar logUserOut={this.logout}/>
          {this.showUser()}


{/* -=-=-=-=-= ROUTES ROOM   =-=--=-=-=-=*/}
        <Switch>
          <Route path="/itemList" render={props => <ItemIndex {...props} currentUser ={this.state.loggedInUser} />} />
        <Route path="/items/details/:id" component={itemDetails} />

        <Route path="/user/login" render={(props) => <Login   {...props} logTheUserIntoAppComponent={this.logInTheUser} />} />

        <Route path="/user/signup" render={(props) => <Signup {...props} logTheUserIntoAppComponent={this.logInTheUser} />} />
        </Switch>
 {/* -==--==--=-=ROUTES ROOM ENDS -=-==--=-=-= */}
      </div>;
  }
}

export default App;
