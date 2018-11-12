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
        <p>{ avatar }</p>
      </div>
    )
  }
}

export default withAuth(Follower);


