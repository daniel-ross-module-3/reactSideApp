import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import NavbarComponent from "./components/Navbar";
import ItemIndex from "./components/itemIndex";
import itemDetails from "./components/itemDetails";
import Signup from "./components/Signup";
import UserService from "./services/UserService";
import Login from "./components/Login";
import User from "./components/User";
import EmployeeList from "./components/EmployeeList";
import FindEmployee from "./components/EmployeeDetail";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";


import LandingPage from "./components/LandingPage"

library.add(faStroopwafel);
library.add(faPen);



class App extends Component {
  state = {
    loggedInUser: null,
  }

  service = new UserService();


  componentDidMount(props){
    this.fetchUser();
  }


  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(theActualUserFromDB =>{
        this.setState({
          loggedInUser:  theActualUserFromDB
        }) 

      })
      .catch( err =>{
        console.log('catch getting hit', err)
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  logInTheUser = (userToLogIn) => {
    console.log('=--=-=-=-=-=',userToLogIn)
    if(!userToLogIn){
  this.setState({loggedInUser: null})
}


      this.setState({loggedInUser: userToLogIn })
    // console.log('this is after',this.state.loggedInUser)

  }

  showUser = () =>{
    if(this.state.loggedInUser){
      // console.log('you are logged in', this.state.loggedInUser)

      return(
        <div>

        <h4>Welcome, {this.state.loggedInUser.username}</h4>
        </div>
        )
    }else{
          return(
            <div className="applicationInfoDiv">
            
            </div>

          )
      
      
    }
  }

  logout = () =>{
    this.service.logout().then(()=>{
      this.setState({loggedInUser: null});
      console.log('you triggered the logout function', this.state.loggedInUser);
    })
  }

  render() {

    return(
    <div className="App">
        <NavbarComponent logUserOut={this.logout} loggedIn={this.logInTheUser} user={this.state.loggedInUser} />
        {/* {this.showUser()} */}

        <Switch>
          <Route exact path="/" render={props => <LandingPage {...props} currentUser={this.state.loggedInUser} />} />

          <Route path="/itemList" render={props => <ItemIndex {...props} currentUser={this.state.loggedInUser} />} />

          <Route path="/employeeList" render={props => <EmployeeList {...props} currentUser={this.state.loggedInUser} />} />

          <Route path="/findingEmployee" render={props => <FindEmployee {...props} currentUser={this.state.loggedInUser} />} />

          <Route path="/items/details/:id" component={itemDetails} />
          
        <Route path="/userHomePage" render={props => <User {...props} currentUser= {this.state.loggedInUser}/> } />

          <Route path="/user/login" render={props => <Login {...props} logTheUserIntoAppComponent={this.logInTheUser} />} />

          <Route path="/user/signup" render={props => <Signup {...props} logTheUserIntoAppComponent={this.logInTheUser} />} />
          
          </Switch>
     </div>
        
    )
  }
}
    
export default App;
