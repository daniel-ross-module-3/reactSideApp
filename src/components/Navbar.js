import React, {Component} from 'react';
import "../App.css";
import {Route, Switch, Link} from 'react-router-dom';
import { Button } from "react-bootstrap";
import { Navbar} from "react-bootstrap";

class NavbarComponent extends Component{

  showCorrectNavLinks = ()=>{

    if(!this.props.user){

      return <div className="nav-bar-nav-bar">
        <img src='/LogoMakr_8jVCA6.png' className="app-logo @keyframes App-logo-spin"/>
          <div className="navbar-div">
            <Navbar className="nav-link-container">
              <div className="link-holder">
              <Link to="/">
               <Button bsStyle="warning"> Home</Button>
              </Link>
              <Link to="/user/login">
              <Button bsStyle="warning">Login</Button>
              </Link>
              <Link to="/user/signup">
              <Button bsStyle="warning">Signup</Button>
              </Link>
              </div>
            </Navbar>
            
          </div>
          
        </div>;
        
    } else {
      return (
      <div className="nav-bar-nav-bar">
        <img src='/LogoMakr_8jVCA6.png' className="app-logo @keyframes App-logo-spin"/>
          <div className="navbar-div">
            
         
          <div className="link-holder-two">
              <div className="usernameNav">Signed in as: {" " + this.props.user.username}</div>
              <Link to="/">
                <Button bsStyle="warning">Home</Button>
              </Link> <br />
              
              <Link to="/user/login" onClick={this.props.logUserOut}>
                <Button bsStyle="warning">Logout</Button>
              </Link>
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
            </div>
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