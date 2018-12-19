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

  showSignupForm = ()=>{
    return(
    <div className="login-form-container background-marble">
    <div className="login-form">
      <h1>Signup</h1>
      <form onSubmit={this.formSubmit}>

        <div className="inputAndLabelHolder">
        <input className="input-style" type='text' name='username' placeholder="Organization Username" value={this.state.username} onChange={e => this.changeTheInputText(e)} />
        </div>

        <div className="inputAndLabelHolder">
        <input className="input-style" type='password' name='password' placeholder="Password" value={this.state.password} onChange={e => this.changeTheInputText(e)} />
        </div>

        <div className="inputAndLabelHolder">
        <input className="input-style" type='text' name='companyName' placeholder="Name of Your Organization" value={this.state.companyName} onChange={e => this.changeTheInputText(e)} />
        </div>

        <button type="submit" className="btn setBtnBg">Get Started</button>

      </form>

      <div className="errorStyle">{this.state.err}</div>
      </div>
    </div>)
  }
  render() {
    return (
      <div>
        {this.showSignupForm()}
      </div>
    )
  }
}

export default Signup;