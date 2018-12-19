// import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
import Navbar from './Navbar';


class User extends Component{
  render(){
    return(
      <div>
      <Navbar />
      
        <h4>Welcome, {this.props.currentUser}</h4>
    
     
      </div>
    )
  }
}
export default User;