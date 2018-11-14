import React, { Component } from 'react';
import auth from '../../lib/auth-service';
import { withAuth } from '../../lib/authContext';
import '../../stylesheets/signup-page.css'

class Signup extends Component {

  state = {
    username: "",
    password: "",
    email: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password, email } = this.state;

    auth.signup({ username, password, email })
      .then( (user) => {
        this.setState({
            username: "",
            password: "",
            email: "",
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
    const { username, password, email } = this.state;
    return (

      <div className="signup-page">
        <div className="signup-container">
          <h1 className="title-app">Step<span>S</span>ay</h1>
          <form className="signup-form" onSubmit={this.handleFormSubmit}>
            <input className="input" type="text" name="username" value={username} onChange={this.handleChange} placeholder="User name"/>
            <input className="input" type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email" />
            <input className="input" type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password"/>
            <input className="button" type="submit" value="Signup" />
          </form>
        </div>
      </div>
    )
  }
}

export default withAuth(Signup);