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

  fetchEmployee = () =>{
    Axios.get("http://localhost:5000/api/employeeFind/" + this.state.theEmployee.employeeKey, { withCredentials: true })
      .then((employee) => {
        this.setState({
          theEmployee: employee.data
        })

      })
      .catch(() => {
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
    // console.log("hello")
    // console.log(this.state.theEmployee.employeeKey)
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
showEmployeeShifts=()=>{
  const singleEmployee = this.state.theEmployee;
  if(singleEmployee){
    // console.log(singleEmployee)
    const showShifts = singleEmployee.shifts.map((eachShift,i)=>{
      // console.log("==-12-=31-=23=-12=3-12=-312=-312",eachShift)
      return(
        <ul key={i}>

        <li className="blue">
          Clock In : {eachShift.clockIn}
        </li>

        <li className="red">
          Clock Out : {eachShift.clockOut}
        </li>
        </ul>
      )
    
    })
    return showShifts
    
  }
  // singleEmployee.map((Emp)=>{
    
  //     return (<div>
  //       <div>
  //         <h1>{Emp}</h1>
  //       </div>
  //     </div>
  //      )})
    }


getTime=()=>{



  // var currentdate = new Date();
  // var datetime = + currentdate.getDate() + "/"
  //   + (currentdate.getMonth() + 1) + "/"
  //   + currentdate.getFullYear() + " @ "
  //   + currentdate.getHours() + ":"
  //   + currentdate.getMinutes() + ":"
  //   + currentdate.getSeconds();
    console.log("-=-=-=-==-00000000000=--==-=-=--=",this.state.theEmployee);
    
    Axios.post("http://localhost:5000/api/clockInAndOut/" + this.state.theEmployee._id, { withCredentials: true })
  .then((theUpdatedEmployee)=>{

    console.log(String(new Date()),'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',theUpdatedEmployee);

    this.setState({
      theEmployee:theUpdatedEmployee.data
    })
 
  }).catch((err)=>{

    console.log(err);    
  });
}
showButton =()=>{
  if(!this.state.theEmployee){
    return(<div></div>)
  }
  
    // console.log("=======================", this.state)

  if (this.state.theEmployee.active){
      console.log("THE EMPLOYEE IS  CLOCKED IN SO WERE SHOWING THE CLOCK OUT BUTTON")
      return (
        <button onClick={this.getTime}>Clock Out</button>
        
        )
      }else{
        console.log("EMPLYOYEE NOT CLOCKED IN SP WE SHOW CLOCK IN BUTTON")
        return(
          <button onClick={this.getTime}>Clock In</button>
          )
        }
      
}
 
  render() {
    console.log("###########################", this.state)
    return <div>
        <div className="employee-form">
        <form onSubmit={this.submitForm}>
          <label>Employee Code: </label><br/>
          <input id="employeeKey" value={this.state.employeeKey} onChange={this.updateForm} /><br/>

          <button>Submit</button><br/>



          {/* <button onClick={this.getTime} className="bg-success">Clock In</button>
          <button onClick={this.getTime} className="bg-danger">Clock Out</button> */}
          
        </form>
          {this.showButton()}
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
        <div className="clock">
        {this.showEmployeeShifts()}
        </div>
      </div>;
  }
  
}

export default EmployeeDetail