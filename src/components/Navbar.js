import React, {Component} from 'react';
import "../App.css";
import {Route, Switch, Link} from 'react-router-dom';
import { Button } from "react-bootstrap";
import { Navbar} from "react-bootstrap";

class NavbarComponent extends Component{

  showCorrectNavLinks = ()=>{

    if(!this.props.user){

      return <div className="nav-bar-nav-bar">
        {/* <img src='/final_nav-bar_logo.png' className="app-logo @keyframes App-logo-spin"/> */}
      <p className="app-logo">Inventory Management Assistant</p>
          <div className="navbar-div">
            <Navbar className="nav-link-container">
              <div className="link-holder">
              <Link to="/">
               <Button bsStyle="warning" className="button-nav"> Home</Button>
              </Link>
              <Link to="/user/login">
              <Button bsStyle="warning" className="button-nav">Login</Button>
              </Link>
              <Link to="/user/signup">
              <Button bsStyle="warning" className="button-nav">Signup</Button>
              </Link>
              </div>
            </Navbar>
            
          </div>
          
        </div>;
        
    } else {
      return (
      <div className="nav-bar-nav-bar">
        <img src='/final_nav-bar_logo.png' className="app-logo @keyframes App-logo-spin"/>
          <div className="navbar-div">
            
         
          <div className="link-holder-two">
              <Link to="/">
                <Button bsStyle="warning">Home</Button>
              </Link> <br />
              
              <br />
              <Link to="/itemList">
                <Button bsStyle="warning">Inventory</Button>
              </Link>
              <br />
              <Link to="/employeeList">
              <Button bsStyle="warning">Employees</Button>
              </Link>
              <br />
              <Link to="/findingEmployee">
              <Button bsStyle="warning">Dashboard</Button>
              </Link>
              <Link to="/" onClick={this.props.logUserOut}>
                <Button bsStyle="warning">Logout</Button>
              </Link>
            </div>
              <div className="usernameNav">Signed in as: {" " + this.props.user.username}</div>
              </div>
              </div>
       
          
        )
    }
  }

  render(){
    return(

        <div>
          {this.showCorrectNavLinks()}
        </div>

 
    )
  }
}

export default NavbarComponent;