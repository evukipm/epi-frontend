import React, { Component } from 'react';
import '../../stylesheets/myfollowers-page.css';
import { withAuth } from '../../lib/authContext';
import Follower from '../../components/Follower';

class Myfollowers extends Component {
  render() {
    const { following } = this.props.user;
    return (
      <div>
        { following ? following.map((follower, index) => (
          <Follower
            data={follower}
            key={index}
            index={index}
          />
        )) : "This user doesn't follow anyone"}
      </div>
    );
  }
}

export default withAuth(Myfollowers);
