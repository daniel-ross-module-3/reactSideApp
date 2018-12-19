import React, {Component} from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { Navbar} from "react-bootstrap";

class NavbarComponent extends Component{

  showCorrectNavLinks = ()=>{
    if(!this.props.user){
      return (
      <div className="nav-bar-nav-bar">
      <div className="row">
        <img src='/nav-log-complete.png' className="app-logo" alt="logo"/>
            <div className="nav-home row">
             
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
            </div>
        </div>)
    } else {
      return (
        
        <div className="row nav-holder">
        <img src='/nav-log-complete.png' className="app-logo" alt="logo"/>
        <div className="usernameNav">Signed in as: {" " + this.props.user.username}</div>
          <Navbar>
         <div className="link-holder-two">
            <Link to="/">
              <Button bsStyle="warning" className="button-nav">Home</Button>
              </Link> 
              <Link to="/itemList">
              <Button bsStyle="warning" className="button-nav">Inventory</Button>
              </Link>
              <Link to="/employeeList">
              <Button bsStyle="warning" className="button-nav">Employees</Button>
              </Link>
              <Link to="/findingEmployee">
              <Button bsStyle="warning" className="button-nav">Dashboard</Button>
              </Link>
              <Link to="/" onClick={this.props.logUserOut}>
              <Button bsStyle="warning" className="button-nav">Logout</Button>
              </Link>
              </div>
              </Navbar>
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