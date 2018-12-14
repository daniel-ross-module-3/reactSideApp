import React, { Component } from "react";
import "../App.css";
import UserService from "../services/UserService";
import Landing from "./LandingComponent";

class LandingPage extends Component {
render(){
  return(
    <div>
      <Landing />
    </div>
  )
}

}
export default LandingPage;
