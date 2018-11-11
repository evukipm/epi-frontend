import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { Redirect } from 'react-router-dom';
import Form from '../components/Form';
import post from '../lib/post-service';
import '../stylesheets/create-post-page.css'

class Createpost extends Component {
  state = {
    steps: [],
    isTitleEmpty: true,
    isDescriptionEmpty: true,
    title: '',
    text: '',
    isPostCreated: false,
  }

  handleSubmit = (value) => {
    const { steps } = this.state;
    steps.push({step: value})
    this.setState({
      steps,
    })
  }

  allIsNotEmpty(){
    const { isTitleEmpty, isDescriptionEmpty, steps } = this.state;
    if (!isTitleEmpty && !isDescriptionEmpty && steps.length > 0){
      return true;
    }
    return false;
  }

  handleCreatePost = () => {
    const { title, text, steps } = this.state;
    post.createPost({ title, text, steps })
    .then( () => {
      this.setState({
        isPostCreated: true,
      })
    })
    .catch( error => {console.log(error) })
  }

  handleChange = (event) => {  
    const {name, value} = event.target
    if(name === 'title'){
      this.setState({
        [name]: value,
        isTitleEmpty: false,
      });
    } else if (name === 'text'){
      this.setState({
        [name]: value,
        isDescriptionEmpty: false,
      });
    }
    console.log(this.state.title, this.state.text)
  }

  handelePostCreated(){
    let isAllNonEmpty = false;
    isAllNonEmpty = this.allIsNotEmpty();
    const {steps} = this.state;
    return (
      <div>
        <label>Title:</label>
        <input name="title"onChange={this.handleChange}/>
        <label>Description:</label>
        <textarea name="text" onChange={this.handleChange}></textarea>
        <p>Define your steps:</p>
        <ul>
          { steps.map( (step, key) => {
            console.log(step)
            return <li key={key}>
            {step.step}
            </li>
              })}
        </ul>
        <Form onSubmit={this.handleSubmit}/>
        { isAllNonEmpty ? <button onClick={this.handleCreatePost}>Create Post</button> : null }
      </div>
    )
  }

  render() {
    const { isPostCreated } = this.state;  
    return (
      <div>
        {!isPostCreated ? this.handelePostCreated() : <Redirect to={'/'}/>}
      </div>
    )
  }
}
  

export default withAuth(Createpost);