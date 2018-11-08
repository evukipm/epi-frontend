import React, { Component } from 'react'
import { withAuth } from '../lib/authContext';

class Profile extends Component {
  render() {
    return (
      <div>
        ajajajaj soy tu ano
      </div>
    )
  }
}

export default withAuth(Profile);
