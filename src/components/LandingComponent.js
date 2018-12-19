import React, { Component } from "react";
import "../App.css";

class Landing extends Component {

  state={loading:false}

  changeLoading = () =>{
    this.setState({loading: !this.state.loading}, () => {
    this.setState({loading:!this.state.loading})})}
  // this method renders the logo and sets the state so that loading is true by calling changeLoading()
  landingLogo=()=>{
   if(!this.state.loading){
    return(
    <div className="background-marble">
      <div className="clickOnLogo">
        <img className="indicateClick" src='/finger_hand_pointing_down_fingers-512.png' alt='click below'/>
        <div className="logo reveal" id="startlab" onClick={this.changeLoading}>
          <div className="circle turq" />
          <div className="circle orange" />
          <div className="circle turqoise" />
          <div className="circle navy" />
          <div className="circle grey" />
          <img src="./LogoMakr_6OQZ68.png" className="imgSize margin-right-logo" alt='Logo'/>
        </div>
        <h4>Learn More</h4>
        <i>click the icon</i>
      </div>
    </div>)
    }else{
    return (
    <div className="background-marble">
      <div className="clickOnLogo">
        <img className="indicateClick" src='/finger_hand_pointing_down_fingers-512.png' alt='click below'/>
        <div className="logo reveal" id="startlab" onClick={this.changeLoading}>
        <div className=" turq" />
        <div className=" orange" />
        <div className=" turqoise" />
        <div className=" navy" />
        <div className=" grey" />
        <div className="image" style={{backgroundImage:'./LogoMakr_6OQZ68.png'}}/>
       </div>
       <h4>Learn More</h4>
       <i>click the icon</i>
      </div>
    </div>)}} 
 render() {
  return(
  <div className="background-marble">
    <div data-toggle="modal" data-target="#exampleModal">
    {this.landingLogo()}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content modal-content-container">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
               Inventory Management Assistant
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          <div className="modal-body modal-body-container">
            <ul className="list">
            	<li>Manage and update your inventory</li>
            	<li>Keep track of labor costs with our staff ledger</li>
            	<li>Track shifts with our clock in/clock out feature </li>
            </ul>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary bg-danger" data-dismiss="modal">
            Close
            </button>   
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);
}
}

export default Landing