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
        <div className="navbar-container">
          <div>
            <Link to={'/'}><i className="fas fa-home"></i></Link>
          </div>
          <div>
          <a><i className="fas fa-search"></i></a>
          </div>
          <div className="create-post-navbar-button">
          <Link to={'/newpost'}><i className="fas fa-pencil-alt"></i></Link>
          </div>
          <div>
          <Link to={`/profile/${user._id}`}><i className="fas fa-user"></i></Link>
          </div>
          <div>
          <a onClick={logout}><i className="fas fa-sign-out-alt"></i></a>
          </div>
        </div>
        ) : (
        <div className="navbar-container">
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
