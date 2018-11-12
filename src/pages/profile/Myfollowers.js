import React, { Component } from 'react';
import '../../stylesheets/myfollowers-page.css'
import { withAuth } from '../../lib/authContext';
import Follower from '../../components/Follower';
import profile from '../../lib/profile-service';

class Myfollowers extends Component {
  state = {
    data: [],
    }

    //componentDidMount
    componentDidMount() {
      this.update();
    }
    //follower update


  render() { 
    const { data } = this.state;
    return ( 
      <div> 
        { data.map((follower, index) => {
          return <Follower
            data = {follower}
            key = {index}
            index = {index}
          />
    })} 
    </div>
    )
  }

}

export default withAuth(Myfollowers);