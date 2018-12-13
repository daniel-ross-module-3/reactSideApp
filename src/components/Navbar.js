import React, {Component} from 'react';
import "../App.css";
import {Route, Switch, Link} from 'react-router-dom';
import { Button } from "react-bootstrap";
import { Navbar} from "react-bootstrap";

class NavbarComponent extends Component{

  showCorrectNavLinks = ()=>{

    if(!this.props.loggedIn){

      return <div>
          <div className="navbar-div">
            <Navbar className="nav-link-container">
              <p>Logo</p>
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
            </Navbar>
          </div>
        </div>;
        
    } else {
      return <div>
          <div className="navbar-div">
            <Navbar>
              <p>Logo</p> <Link to="/">
                <Button bsStyle="warning">Home Page</Button>
              </Link> <br />
              {/* <Link to="/itemList">View item list</Link> */}
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