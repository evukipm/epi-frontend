import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/authContext';
import '../stylesheets/navbar-component.css'

class Navbar extends Component {
  render() {
    const { isLogged, user, logout } = this.props;
    return (
      <div>
        {isLogged ? (
        <div>
          <Link to={'/'}>Homepage</Link>
          <p>username: {user.username}</p>
          <p onClick={logout}>Logout</p>
          <Link to={`/profile/${user._id}`}>Go to my profile</Link>
        </div>
) : (
<div>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
          
        </div>
)
      }
      </div>
    );
  }
}

export default withAuth(Navbar);
