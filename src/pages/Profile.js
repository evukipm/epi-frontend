import React, { Component } from 'react'
import { withAuth } from '../lib/authContext';
import profileAjax from '../lib/profile-service';
import { Route, Link } from 'react-router-dom';
import Mypost from '../components/Mypost';
import Myfollowers from'../components/Myfollowers';
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
    const id = this.props.match.params.id;
    return (
      <div className='profile-main-page'>
        <div></div>
        <div>
          <nav>
            <Link to={`/profile/${id}/mypost`}>link1</Link>
            <Link to={`/profile/${id}/myfollowers`}>link2</Link>
          </nav>
          <Route path={`/profile/${id}/mypost`} render={props => {return <Mypost {...props} id={id} />}}/>
          <Route path={`/profile/${id}/myfollowers`} render={props => {return <Myfollowers {...props} id={id} />}}/>
        </div>
      </div>
    )
  }
}

export default withAuth(Profile);
