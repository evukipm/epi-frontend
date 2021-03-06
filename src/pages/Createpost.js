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
  }

  handelePostCreated(){
    let isAllNonEmpty = false;
    isAllNonEmpty = this.allIsNotEmpty();
    const {steps} = this.state;
    return (
      <div className="create-post-container">
        <h1 className="create-post-title text">New post</h1>
        <div>
          <div>
            <input className="input-for-create-post" name="title"onChange={this.handleChange} placeholder="Title"/>
          </div>
          <div>
            <textarea name="text" onChange={this.handleChange}placeholder="Description"></textarea>
          </div>
          <div>
            <p className="label-text text">Define your steps:</p>
            <ol>
              { steps.map( (step, key) => {
                return <li key={key}>
                {step.step}
                </li>
                  })}
            </ol>
            <Form onSubmit={this.handleSubmit}/>
            { isAllNonEmpty ? <button className="button create-post-button" onClick={this.handleCreatePost}>Create Post</button> : null }
          </div>
        </div>
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