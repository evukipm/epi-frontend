import React, { Component } from 'react'
import post from '../lib/post-service';
import Container from '../components/Container';
import '../stylesheets/homepage.css'

export default class Homepage extends Component {

  state = {
    data: [],
    isLoading: true,
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      isLoading: true,
    })
    post.getPost()
    .then((result)=>{
      this.setState({
        data: result,
        isLoading: false,
      })
    })
    .catch((error) =>{
      console.log(error)
    })
  }

  render() {
    const {data} = this.state;
    return (
      <div className="main-post-list">
        {data.map( (post, index) => {
          return <Container 
            data = {post}
            key = {index}
            index = {index}
          />
        })}
      </div>
    )
  }
}
