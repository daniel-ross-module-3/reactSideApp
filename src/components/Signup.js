import React, { Component } from 'react';
import "../App.css";
import UserService from '../services/UserService';



class Signup extends Component {
  state = {
    username: '',
    password: '',
    companyName: ''
  }
  service = new UserService();

  formSubmit = (e) => {
    e.preventDefault();

    this.service.signup(this.state.username, this.state.password, this.state.companyName)
      .then((userFromDB) => {
        // console.log('------------------------', userFromDB);
        this.props.logTheUserIntoAppComponent(userFromDB);
        // here we wait for the API to give us the user object back after logging in
        // then we pass that user object back to app component
        this.setState({ username: '', password: '', companyName: '' });

        // this.props.history.push('/user');


      })
      .catch((err) => {
        console.log('sorry something went wrong', err);

      })
  }

  changeTheInputText = (e) => {

    this.setState({
      [e.target.name]: e.target.value,
    })
  }




  render() {
    // console.log(this.state.username);
    // console.log('this will be the password', this.state.password);
    return (

      <div>
        <h1>this is the signup component that will speak to the /signup route</h1>
        <form onSubmit={this.formSubmit}>
          <label>Username</label>
          <input type='text' name='username' placeholder="put in your username" value={this.state.username} onChange={e => this.changeTheInputText(e)} /><br />
          <label>Password</label>
          <input type='text' name='password' placeholder="put in your password" value={this.state.password} onChange={e => this.changeTheInputText(e)} /><br />
          <label>Company Name</label>
          <input type='text' name='companyName' placeholder="Company Name" value={this.state.companyName} onChange={e => this.changeTheInputText(e)} /><br />
          <button type="submit">formSubmit function</button>
        </form>
      </div>
    )
  }
}

export default Signup;