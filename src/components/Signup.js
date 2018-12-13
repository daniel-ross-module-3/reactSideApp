import React, { Component } from 'react';
import "../App.css";
import UserService from '../services/UserService';



class Signup extends Component {
  state = {
    username: '',
    password: '',
    companyName: '',
    err: ''
  }
  service = new UserService();

  formSubmit = (e) => {
    e.preventDefault();

    this.service.signup(this.state.username, this.state.password, this.state.companyName)
    .then((userFromDB) => {
      this.props.logTheUserIntoAppComponent(userFromDB);
        // console.log('------------------------', userFromDB);
        // here we wait for the API to give us the user object back after logging in
        // then we pass that user object back to app component
        this.setState({ username: '', password: '', companyName: '' });

        // this.props.history.push('/userHomePage');


      })
      .catch((err) => {
        console.log('sorry something went wrong', err);
        this.setState({err: 'enter another username and password'})
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
        {this.state.err}
      </div>
    )
  }
}

export default Signup;