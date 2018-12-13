import React, { Component } from "react";
import "../App.css";
import Axios from "axios";


class EmployeeDetail extends Component{
state={
  employeeKey: ""

}

updateForm=(e)=>{
  this.setState({
    [e.target.id]: e.target.value
  })
}

submitForm =(e) =>{
  e.preventDefault();
  Axios.get("http://localhost:5000/api/employeeFind/"+this.state.employeeKey)
  .then((employee)=>{

    this.setState({
      theEmployee: employee.data
    })

  })
  .catch(()=>{
  })
  
  ;
}


showEmployeeDetails=()=>{
  const emply = this.state.theEmployee;


      if(emply){

        return(
          <div>
          <h1>{emply.employeeName}</h1>
        </div>
      )
}
}
getTime=()=>{
  var currentdate = new Date();
  var datetime = + currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();
  console.log(datetime)
}


  render() {
    console.log(this.state)
    return <div>
        <form onSubmit={this.submitForm}>
          <label>Enter your Key</label>
          <input id="employeeKey" value={this.state.employeeKey} onChange={this.updateForm} />

        <button>Submit</button>

        <button onClick={this.getTime}>Clock In</button>
        <button onClick={this.getTime}>Clock Out</button>
        </form>


        {this.showEmployeeDetails()}
      </div>;
  }
  
}

export default EmployeeDetail