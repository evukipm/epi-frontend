import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import Form from '../components/Form';
import post from '../lib/post-service';

class Createpost extends Component {
  state = {
    numberOfSteps: [],
    isNumberOfStepsEmpty: true,
    isTitleEmpty: true,
    isDescriptionEmpty: true,
    title: '',
    text: '',
  }

  handleSubmit = (value) => {
    const { numberOfSteps } = this.state;
    numberOfSteps.push({step: value})
    this.setState({
      numberOfSteps: numberOfSteps,
      isNumberOfStepsEmpty: false,
    })
  }

  allIsNotEmpty(){
    const { isNumberOfStepsEmpty, isTitleEmpty, isDescriptionEmpty } = this.state;
    if (!isNumberOfStepsEmpty && !isTitleEmpty && !isDescriptionEmpty){
     return true;
    }
    return false;
  }

  handleCreatePost(){
    const { title, text, numberOfSteps} = this.state;
    post.createPost({ title, text, numberOfSteps })
    .then( (post) => {
    })
    .catch( error => {console.log(error) })
  }

  

  handleChange = (event) => {  
    const {name, value} = event.target
    this.setState({[name]: value});
    console.log(this.state.title, this.state.text)
  }
  


  render() {
    const { numberOfSteps } = this.state;  
    let isAllNonEmpty = false;
    isAllNonEmpty = this.allIsNotEmpty();
    return (
      <div>
        <label>Title:</label>
        <input name="title "onChange={this.handleChange}></input>
        <label>Description:</label>
        <textarea name="text" onChange={this.handleChange}></textarea>
        <p>Define your steps:</p>
        <ul>
          { numberOfSteps.map( (step, key) => {
            console.log(step)
            return <li key={key}>
              {step.step}
            </li>
          })}
        </ul>
        <Form onSubmit={this.handleSubmit}/>
        {isAllNonEmpty ? <button onClick={this.handleCreatePost}>Create Post</button> : null }
      </div>
    )
  }
}

export default withAuth(Createpost);