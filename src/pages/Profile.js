import React, { Component } from 'react'
import { withAuth } from '../lib/authContext';
import profileAjax from '../lib/profile-service';

class Profile extends Component {

  state = {
    user: '',
    isLoading: true
  }

  componentDidMount() {
    this.update()
  }

  update = () => {
    this.setState({
      isLoading: true,
    })
    const id = this.props.match.params.id;
    profileAjax.getProfile(id)
      .then(data => {
        this.setState({
          user: data,
          isLoading: false
        })
      })
      .catch(error=> {
        console.log(error)
      });
  }
    
    
  render() {
    const { user } = this.state;
    return (
      <div>
        {user.username}
      </div>
    )
  }
}

export default withAuth(Profile);
