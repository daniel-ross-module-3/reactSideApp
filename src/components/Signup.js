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
      
      this.props.history.push('/');
      console.log(this.props)
      

      })
      .catch((err) => {
        console.log('sorry something went wrong', err);
        this.setState({err: 'Try again'})
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
      <div className="login-form-container background-marble">
      <div className="login-form">
        <h1>Signup</h1>
        <form onSubmit={this.formSubmit}>
        <div className="inputAndLabelHolder">
          <label>Username</label>
          <input type='text' name='username' placeholder="put in your username" value={this.state.username} onChange={e => this.changeTheInputText(e)} />
          </div>
          <div className="inputAndLabelHolder">
          <label>Password</label>
          <input type='text' name='password' placeholder="put in your password" value={this.state.password} onChange={e => this.changeTheInputText(e)} />
          </div>
          <div className="inputAndLabelHolder">
          <label>Company Name</label>
          <input type='text' name='companyName' placeholder="Company Name" value={this.state.companyName} onChange={e => this.changeTheInputText(e)} />
          </div>
          <button type="submit">formSubmit function</button>
        </form>
        <div className="errorStyle">{this.state.err}</div>
        </div>
      </div>
    )
  }
}

export default Signup;