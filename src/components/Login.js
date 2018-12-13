import React, { Component } from 'react';
import "../App.css";
import UserService from '../services/UserService';
// import User from './components/User';



class Login extends Component {
  state = {
    username: '',
    password: '',
    err: ''
  }
  service = new UserService();

  formSubmit = (e) => {
    e.preventDefault();
    this.service.login(this.state.username, this.state.password)
    
    // console.log('youyoyoyoyoyoyoy this is the formSubmit function to login')
    .then((userFromDb) => {
      this.setState({
        username: '',
        password: '',
      })
      this.props.logTheUserIntoAppComponent(userFromDb);
        this.props.history.push('/userHomePage');
        // console.log(this.state.username, this.state.password);        


      })
      .catch((err) => {
        this.setState({
          err: "swaggy error will go here",
        })
        console.log('sorry something went wrong', err);
      })
  }

  changeTheInputText = (e) => {
    // console.log('e.target.name ',e.target.name)
    this.setState({
      [e.target.name]: e.target.value,
    })

  }




  render() {
    // console.log(this.state.username);
    // console.log('this will be the password', this.state.password);
    return (

      <div>
        <h1>this is the Login component that will speak to the /login route</h1>
        <form onSubmit={this.formSubmit}>
          <label>Username</label>
          <input type='text' name='username' placeholder="put in your username" value={this.state.username} onChange={e => this.changeTheInputText(e)} /><br />
          <label>Password</label>
          <input type='text' name='password' placeholder="put in your password" value={this.state.password} onChange={e => this.changeTheInputText(e)} /><br />
          <input type="submit" value="login" />
        </form>
        {this.state.err}
      </div>
    )
  }
}

export default Login;
