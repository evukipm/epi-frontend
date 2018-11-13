import React, { Component } from 'react'
import { withAuth } from '../lib/authContext';

class Follower extends Component {

  state = {
    data: this.props.data,
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <p>{ data.username }</p>
<<<<<<< HEAD
=======
        <p>{ data.avatar }</p>
>>>>>>> 7e9755760355d2c37992eb979f9e3bf048c172d0
      </div>
    )
  }
}

export default withAuth(Follower);


