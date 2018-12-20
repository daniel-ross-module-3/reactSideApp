import React, { Component } from "react";
import "../App.css";
import Axios from "axios";


class EmployeeShift extends Component {
state={
  employee: ""
}

getEmployeeShifts=()=>{
  Axios.get(
    "http://localhost:5000/api/employeeFind/" + this.props.match.params.key,
    { withCredentials: true }
  )
    .then(employee => {
      this.setState({ theEmployee: employee.data });
      // console.log("-=-==--==-=",this.state.theEmployee.employeeName)
    })
    .catch(() => {});
}

  showEmployeeShifts = () => {
    this.getEmployeeShifts()
    const singleEmployee = this.state.theEmployee;
    // this.setState({
    //   employee:singleEmployee
    // })
    // console.log("1231231 2312312312312312312312",singleEmployee)
    // console.log("112312312312312", this.props.match.params.key)
    if (singleEmployee) {
      // console.log(singleEmployee)
      const showShifts = singleEmployee.shifts.map((eachShift, i) => {
        // console.log("==-12-=31-=23=-12=3-12=-312=-312",eachShift)
        
        return (
          <div>
          <h1>Hello {this.singleEmployee}</h1>
          <ul key={i}>

            <li className="blue">
              Clock In : {eachShift.clockIn}
            </li>

            <li className="red">
              Clock Out : {eachShift.clockOut}
            </li>
              <li className="red">
                Total Hours : {Number(eachShift.clockOut-eachShift.clockIn)}
              </li>

          </ul>
          </div>
        )

      })
      return showShifts

    }
  }
  render(){
    
    return <div>
        {/* im trying to print on the screen  = Hello, employee.employeeName.
      
      These are your shifts, and the shifts would be organized by date.(which they are)
      
      Also, i want to give the total hours on the week, ive read somethings about date subtractions with math.abs({eachShift.clockOut-eachShift.clockIn*/}
        {this.showEmployeeShifts()}
      </div>;

  }
}



export default EmployeeShift;