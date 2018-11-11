import React, { Component } from 'react';
import profileAjax from '../../lib/profile-service';
import Container from '../../components/Container';
import {withAuth}  from '../../lib/authContext';
import '../../stylesheets/myposts-page.css'

class Mypost extends Component {
  state = { 
    posts: [],
    isLoading: true
  }

  componentDidMount() {
    this.update()
  }

  update = () => {
    this.setState({
      isLoading: true,
    })
    const { id } = this.props
    profileAjax.getuserPost(id)
      .then(posts => {
        this.setState({
          posts,
          isLoading: false
        })
      })
      .catch(error=> {
        console.log(error)
      });
  }


  render() { 
    const { posts } = this.state;
    return (
    <div>
      {
        posts.map((data, index) => {
          return <Container 
            data={data}
            key={index}
          />
        })
      }
    </div>);

  }
}

export default withAuth(Mypost);

