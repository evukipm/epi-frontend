import React, { Component } from 'react';
import '../../stylesheets/myfollowers-page.css';
import { withAuth } from '../../lib/authContext';
import Follower from '../../components/Follower';
import profileAjax from '../../lib/profile-service';

class Followers extends Component {

  state = {
    followers: [],
    isLoading: true,
  }

  componentDidMount() {
    this.update()
  }

  update = () => {
    this.setState({
      isLoading: true,
    })
    const {id} = this.props
    profileAjax.getfollowers(id)
      .then(followers => {
          this.setState({
            followers,
            isLoading: false,
          })
      })
      .catch(error=> {
        console.log(error)
      });
  }

  render() {
    const { followers } = this.state;
    return (
      <div>
        { followers.length > 0 ? followers.map((follower, index) => (
          <Follower
            data={follower}
            key={index}
            index={index}
          />
        )) : "This user doesn't have followers"}
      </div>
    );
  }
}

export default withAuth(Followers);
