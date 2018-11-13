import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../lib/auth-service';
import { withAuth } from '../../lib/authContext';
import '../../stylesheets/signup-page.css'

class Signup extends Component {

  state = {
    username: "",
    password: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    auth.signup({ username, password })
      .then( (user) => {
        this.setState({
            username: "",
            password: "",
        });
        this.props.setUser(user);
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
      <div class="container">
        <h1 class="title-app">Stepsay</h1>
        <form onSubmit={this.handleFormSubmit}>
        <div>
          <div class="signup-login-elements">
            <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="User name"/>
          </div>
          <div class="signup-login-elements">
            <input type="password" name="password" value={password} onChange={this.handleChange} 
              placeholder="Password"/>
          </div>
        </div>
        <div class="signup-login-elements">
          <input type="submit" value="Signup" />
        </div>
        </form>
        <p>Already have account? 
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    )
  }
}

export default withAuth(Signup);