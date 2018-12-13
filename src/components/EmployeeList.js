import React, { Component } from 'react';
import "../App.css";
import Axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';

import AddNewEmployee from './AddNewEmployee';


class EmployeeList extends Component {
  state = {
    allTheEmployees: []
  };
  componentWillMount() {
    this.fetchEmployees();
  }

  fetchEmployees = () => {
    console.log("hello")
    Axios.get("http://localhost:5000/api/employeeList", {withCredentials: true})
      .then(responseFromApi => {
        console.log('=-=--=-=-=-=-=-=-',responseFromApi)
        this.setState({ allTheEmployees: responseFromApi.data.reverse() });
      })
      .catch(err => { });
  };

  showAllEmployees = () => {
    //this.fetchEmployees()
    const allTheEmployees = this.state.allTheEmployees;
    // console.log(allTheEmployees)

    return allTheEmployees.map(eachEmployee => {
      // console.log(eachEmployee);
      return (
        <div key={eachEmployee} className="eachEmployee">
          <h3>{eachEmployee.employeeName}</h3>
          <h3 className="descriptionBox">{eachEmployee.employeeKey}</h3>
          <h3> {eachEmployee.payRate}</h3>
          <h3> {eachEmployee.position}</h3>
          {/* <h3>
            <Link to={`/items/details/${eachEmployee._id}`}>See Details</Link>
          </h3> */}
        </div>
      );
    });
  };

  addItemToState = (item) => {
    // console.log(item)
    let allItems = [...this.state.allTheEmployees];
    allItems.unshift(item.data)
    this.setState({ allTheEmployees: allItems });
  }

  render() {
    // console.log("0--0=-=-",this.showAllEmployees())

    return (<div>
      <div>
        <div className="eachEmployee">
          <h3>Employee Name</h3>
          <h3   >Employee Key</h3>
          <h3>Employee Pay Rate</h3>
          <h3>employee Position</h3>
          <h3>See Details </h3>
        </div>
        <h3>{this.showAllEmployees()}</h3>
      </div>

      {/* <div>
          {this.showAllEmployees()}
        </div> */}
      <div>
        <AddNewEmployee addItemToState={this.addItemToState} />
      </div>
    </div>
    )
  }
}
export default EmployeeList;

