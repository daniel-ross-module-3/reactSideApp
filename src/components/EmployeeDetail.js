import React, { Component } from "react";
import "../App.css";
import Axios from "axios";
import Table from "react-bootstrap/lib/Table";
import { Button } from "react-bootstrap";

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
  Axios.get("http://localhost:5000/api/employeeFind/"+this.state.employeeKey, {withCredentials:true})
  .then((employee)=>{

    this.setState({
      theEmployee: employee.data
    })

  })
  .catch(()=>{
  })
  
  ;
}
  deleteEmployee = () => {
    console.log("hello")
    console.log(this.state.theEmployee.employeeKey)
    Axios.post("http://localhost:5000/api/employeeFind/delete/" + this.state.theEmployee.employeeKey, { withCredentials: true})
      .then(() => {
        this.props.history.push("/employeeList");
        // this is how your redirect in react
      })
      .catch(() => { });
  }

showEmployeeDetails=()=>{
  const emply = this.state.theEmployee;
      if(emply){
        return(<tr key={emply.employeeKey}>
              <td>{emply.employeeName}</td>
              <td>{emply.employeeKey}</td>
              <td>{emply.payRate}</td>
              <td>{emply.position}</td>
          <td>
            <Button bsStyle="danger" onClick={this.deleteEmployee}>Delete This Employee</Button>
        </td>
           </tr>
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
        <div className="employee-form">
        <form onSubmit={this.submitForm}>
          <label>Employee Code: </label><br/>
          <input id="employeeKey" value={this.state.employeeKey} onChange={this.updateForm} /><br/>

          <button>Submit</button><br/>

          <button onClick={this.getTime} className="bg-success">Clock In</button>
          <button onClick={this.getTime} className="bg-danger">Clock Out</button>

          
        </form>
        </div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Employee Key</th>
              <th>Employee Pay Rate</th>
              <th>Position</th>
              <th>Delete an Employee Info</th>

            </tr>
          </thead>
          <tbody>{this.showEmployeeDetails()}</tbody>
        </Table>
      </div>;
  }
  
}

export default EmployeeDetail