import React, { Component } from 'react';
import auth from '../../lib/auth-service';
import { withAuth } from '../../lib/authContext';
import '../../stylesheets/login-page.css'

class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    auth.login({ username, password })
    .then( (user) => {
      this.props.setUser(user)
      this.props.history.push('/'); 
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
      <div>
        <label className="label-text" >Username:</label>
        <input type="text" name="username" value={username} onChange={this.handleChange}/>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={this.handleChange} />
      </div>
        <input type="submit" value="Login" />
      </form>
    )
  }
}

export default withAuth(Login);