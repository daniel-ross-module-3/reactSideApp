import React, { Component } from "react";
import "../App.css";
import Axios from "axios";


class EmployeeShift extends Component {
state={
  employee: ""
}




componentDidMount(){
  this.getEmployeeShifts();
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
    
    const singleEmployee = this.state.theEmployee;
    // this.setState({
    //   employee:singleEmployee
    // })
    // console.log("1231231 2312312312312312312312",singleEmployee)
    // console.log("112312312312312", this.props.match.params.key)
    if (singleEmployee) {
      // console.log(singleEmployee)
      const showShifts = singleEmployee.shifts.map((eachShift, i) => {

        console.log(eachShift);



        const seconds = (new Date(eachShift.clockOut).getTime() - new Date(eachShift.clockIn).getTime())/1000;

        const hours = Math.floor(seconds/3600);
        if(hours > 1){
          seconds = seconds - hours * 3600;
        }
        const minutes = Math.floor(seconds/60);
        if(minutes > 1){
          seconds = seconds - minutes * 60;
        }
      
        
        return (
          <div>
            <div>
          <h1>Hello {this.singleEmployee}</h1>
          </div>
          <ul key={i}>

            <li className="blue">
              Clock In : {eachShift.clockIn}
            </li>

            <li className="red">
              Clock Out : {eachShift.clockOut}
            </li>
              <li className="red">
                Total time : {hours}h {minutes}m {seconds}s
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