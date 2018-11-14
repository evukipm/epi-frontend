import React, { Component } from 'react';
import auth from '../../lib/auth-service';
import { withAuth } from '../../lib/authContext';
import '../../stylesheets/login-page.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    message: '',
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    auth.login({ username, password })
    .then( (user) => {
      this.props.setUser(user)
      this.props.history.push('/'); 
    })
    .catch( error => {
      const { data } = error.response;
      console.log(data)
      switch(data.error){
        case 'User or password invalid':
          this.setState({
            message: 'Username or password not valid'
          });
          break;
        case 'not-found':
          this.setState({
            message: 'Username or password not valid'
          });
          break;
        case 'validation':
          this.setState({
            message: 'Username or password can\'t be empty'
          });
          break;
        default:
          this.setState({
            message: ''
          });
      }
    })
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password, message } = this.state;
    return (
      <div className="login-page">
        <div className="login-container">
          <h1 className="title-app">Step<span>S</span>ay</h1>
          <form className="login-form" onSubmit={this.handleFormSubmit}>
            <input className="input" type="text" name="username" value={username} onChange={this.handleChange} placeholder="User name"/>
            <input className="input" type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password"/>
            <input className="button" type="submit" value="Login" />
          </form>
        </div>
        { message ? <p className="login-error-message">{ message }</p> :  null}
      </div>
    )
  }
}

export default withAuth(Login);