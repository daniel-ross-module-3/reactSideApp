import React, { Component } from 'react';
import "../App.css";
import Axios from 'axios';
import { Link } from 'react-router-dom';


class AddNewEmployee extends Component {
  state = {
    employeeName: "",
    employeeKey: "",
    payRate: 0,
    position: "",
    // quantity: 0
    showform: true

  }

  addEmployeeButton = ()=>{
    return(
      <button className="bg-success" onClick={this.setState({showform: true})}>Add Employee</button>
    )
  }

  updateInput = (e) => {
    this.setState({ [e.target.id]: e.target.value })
    // console.log(e.target.value)
  }

  createNewEmployee = (e) => {
    e.preventDefault();
    const newName = this.state.employeeName;
    const newDescription = this.state.employeeKey;
    const newCost = this.state.payRate;
    const newposition = this.state.position;
    // const newQuantity = this.state.quantity

    Axios.post("http://localhost:5000/api//employeeCreate", { employeeName: newName, employeeKey: newDescription, payRate: newCost, position: newposition },
        // quantity: newQuantity

      { withCredentials: true })
      .then(responeFromOurAPI => {
        // console.log("-==--=-=",this.state.position)
        // console.log(this.state.payRate)
        // console.log(this.state.employeeKey)
        // console.log(this.state.employeeName)
        console.log("-=-=-==--=-=success", responeFromOurAPI);

        this.props.addItemToState(responeFromOurAPI);
      })
      .catch(err => {
        console.log("-==-=--=-==-=-error creating task", err);
      });
  }

  addEmployeeForm = ()=>{
    if(this.state.showform === true){
    return(
<div>
<div className="employeeFormContainer">
<div className="employeeColumns">
<h2>Add Employee</h2>
<form onSubmit={this.createNewEmployee}>
  <label>Employee Name</label>
  <input type="text" value={this.state.employeeName} id="employeeName" onChange={this.updateInput} />

  <label>Employee Key</label>
  <input type="text" value={this.state.employeeKey} id="employeeKey" onChange={this.updateInput} />


  <label>payRate</label>
  <input type="number" value={this.state.payRate} id="payRate" onChange={this.updateInput} />

  <label>Employee Position</label>
  <input type="text" value={this.state.position} id="position" onChange={this.updateInput} />


  {/* <label>Quantity in Stock</label>
  <input type="number" value={this.state.quantity} id="quantity" onChange={this.updateInput} /> */}
  <button className="bg-primary btn">Save</button>
</form>
</div>
</div>
</div>
    )
  }
  }

  render() {
    // console.log("================", this.state)
    return( <div>
     {this.addEmployeeForm()}
  
    </div>)
  }





}


export default AddNewEmployee;

