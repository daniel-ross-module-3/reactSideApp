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
        this.props.history.push('/');
        // console.log(this.state.username, this.state.password);        


      })
      .catch((err) => {
        this.setState({
          err: "Not Authorized",
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
      <div className="login-form-container background-marble">

      <div className="login-form-two">
        <h2>Login</h2>
        <form onSubmit={this.formSubmit}>
          <div className="inputAndLabelHolder">
          
          <input className="input-style" type='text' name='username' placeholder="Username e.g. IronhackFTWD" value={this.state.username} onChange={e => this.changeTheInputText(e)} /><br /></div>
          <div className="inputAndLabelHolder">
          
          <input className="input-style" type='text' name='password' placeholder="Input Password" value={this.state.password} onChange={e => this.changeTheInputText(e)} /><br />
          </div>
          <input type="submit" value="login" className="setBtnBg btn"/>
        </form>
        <div className="errorStyle">{this.state.err}</div>
      </div>
      </div>
    )
  }
}

export default Login;
