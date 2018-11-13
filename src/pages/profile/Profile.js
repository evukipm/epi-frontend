import React, { Component } from 'react'
import { withAuth } from '../../lib/authContext';
import profileAjax from '../../lib/profile-service';
import { Route, Link } from 'react-router-dom';
import Mypost from './Mypost';
import Following from './Following';
import Followers from './Followers'
import '../../stylesheets/profile-page.css'

class Profile extends Component {

  state = {
    user: '',
    isLoading: true,
    isSameUser: false,
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
        const loggedUser = this.props.user._id
        if (loggedUser === id) {
          this.setState({
            user: data,
            isLoading: false,
            isSameUser: true,
          })
        } else {
          this.setState({
            user: data,
            isLoading: false,
            isSameUser: false,
          })
        }
      })
      .catch(error=> {
        console.log(error)
      });
  }

  addFollower = (e) => {
    const id = this.props.match.params.id;
    profileAjax.follow(id)
    .then(data => {
      this.setState({
        user: data,
      })
    })
    .catch(error=> {
      console.log(error)
    });
  }
    
    
  render() {
    const id = this.props.match.params.id;
    const {_id, username, avatar, description} = this.state.user
    return (
      <div className='profile-main-page'>
        <div>
          <div>
            <img src={avatar} alt={username} />
          </div>
          <div>
            <Link to={`/profile/${_id}`}>{username}</Link> 
            { this.state.isSameUser ? null : <button onClick={this.addFollower.bind(this)}>Follow me</button>} 
          </div>
          <div>
            {description}
          </div>
        </div>
        <div>
          <nav>
            <Link to={`/profile/${id}/mypost`}>Stepsays</Link>
            <Link to={`/profile/${id}/following`}>Following</Link>
            <Link to={`/profile/${id}/followers`}>Followers</Link>
          </nav>
          <Route path={`/profile/${id}/mypost`} render={props => {return <Mypost {...props} id={id} />}}/>
          <Route path={`/profile/${id}/following`} render={props => {return <Following {...props} user={this.state.user} />}}/>
          <Route path={`/profile/${id}/followers`} render={props => {return <Followers {...props} id={id} />}}/>
        </div>
      </div>
    )
  }
}

export default withAuth(Profile);
