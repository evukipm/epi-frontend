import React, { Component } from 'react'
import { withAuth } from '../lib/authContext'

class Profile extends Component {
  render() {
    return (
      <div>
        Soy tu perfil
      </div>
    )
  }
}

export default withAuth(Profile)