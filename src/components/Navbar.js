import React, {Component} from 'react';
import "../App.css";
import {Route, Switch, Link} from 'react-router-dom';
import { Button } from "react-bootstrap";
import { Navbar} from "react-bootstrap";

class NavbarComponent extends Component{

  showCorrectNavLinks = ()=>{

    if(!this.props.loggedIn){

      return <div className="nav-bar-nav-bar">
        <img src='/LogoMakr_8jVCA6.png' className="app-logo @keyframes App-logo-spin"/>
          <div className="navbar-div">
            <Navbar className="nav-link-container">
              <div className="link-holder">
              <Link to="/">
                {" "}
                <Button bsStyle="warning"> Home Page</Button>{" "}
              </Link>
              <Link to="/user/login">
              <Button bsStyle="warning">Log In</Button>
              </Link>
              <Link to="/user/signup">
              <Button bsStyle="warning">Sign Up</Button>
              </Link>
              </div>
            </Navbar>
            
          </div>
          
        </div>;
        
    } else {
      return <div>
          <div className="navbar-div">
            <Navbar>
              <p>Logo</p> 
              <div>Signed in as: {this.props.userName.username}</div>
              <Link to="/">
                <Button bsStyle="warning">Home Page</Button>
              </Link> <br />
              
              <Link to="/user/login" onClick={this.props.logUserOut}>
                {" "}
                <Button bsStyle="warning">Logout</Button>{" "}
              </Link>
              <br />
              <Link to="/itemList">
                <Button bsStyle="warning">View Inventory</Button>
              </Link>
              <br />
              <Link to="/employeeList">
              <Button bsStyle="warning">View Employee list</Button>
              </Link>
              <br />
              <Link to="/findingEmployee">
              <Button bsStyle="warning">Employee Dashboard</Button>
              </Link>
            </Navbar>
          </div>
        </div>;
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