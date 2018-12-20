import React, { Component } from "react";
import "../App.css";
import UserService from "../services/UserService";
import Landing from "./LandingComponent";

class LandingPage extends Component {
render(){
  return(
    <div className="background-marble">
      <Landing {...this.props} className="background-marble"/>
    </div>
  )
}

}
export default LandingPage;
