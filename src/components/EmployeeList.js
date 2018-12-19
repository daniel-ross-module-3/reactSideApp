import React, { Component } from 'react';
import "../App.css";
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Table from "react-bootstrap/lib/Table";
import { Button } from "react-bootstrap";
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
      return <tr key={eachEmployee}>
          <td>{eachEmployee.employeeName}</td>
          <td>{eachEmployee.employeeKey}</td>
          <td>{eachEmployee.payRate}</td>
          <td>{eachEmployee.position}</td>
          <Button bsStyle="info">
          <Link to={`/employeeFind/${eachEmployee.employeeKey}`}>Check Employee Shifts</Link>
          </Button>
        </tr>;
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

    return (
    <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Employee Key</th>
              <th>Employee Pay Rate</th>
              <th>Employee Position</th>
              <th>Employee Details</th>

            </tr>
          </thead>
          <tbody>
            {this.showAllEmployees()}
          </tbody>
        </Table>
      <div>
        <AddNewEmployee addItemToState={this.addItemToState} />
      </div>
    </div>
    )
  }
}
export default EmployeeList;

