import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/authContext';
import '../stylesheets/navbar-component.css';

class Navbar extends Component {

  state = {
    inLogin: false,
    inSignup:false,
  }

  comparePaths = () => {
    const { path } = this.props
    console.log(path)
  }

  render() {
    const { isLogged, user, logout } = this.props;
    return (
      <div>
        {this.comparePaths}
        {isLogged ? (
          <div className="navbar-container">
            <Link to="/"><i className="fas fa-home" /></Link>
            <Link to="/search"><i className="fas fa-search" /></Link>
            <Link to="/newpost" className="create-post" ><i className="fas fa-pencil-alt" /></Link>
            <Link to={`/profile/${user._id}`}><i className="fas fa-user" /></Link>
            <a onClick={logout}><i className="fas fa-sign-out-alt" /></a>
          </div>
        ) : (
          <div className="navbar-login-container">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
        )
      }
      </div>
    );
  }
}

export default withAuth(Navbar);
