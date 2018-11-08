import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import Form from '../components/Form';
import post from '../lib/post-service';

class Createpost extends Component {
  state = {
    numberOfSteps: [],
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
    })
  }

  allIsNotEmpty(){
    const { isTitleEmpty, isDescriptionEmpty, numberOfSteps } = this.state;
    if (!isTitleEmpty && !isDescriptionEmpty && numberOfSteps.length > 0){
     return true;
    }
    return false;
  }

  handleCreatePost = () => {
    const { title, text, numberOfSteps } = this.state;
    post.createPost({ title, text, numberOfSteps })
    .then( (post) => {

    })
    .catch( error => {console.log(error) })
  }

  handleChange = (event) => {  
    const {name, value} = event.target
    console.log(name)
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

  render() {
    const { numberOfSteps } = this.state;  
    let isAllNonEmpty = false;
    isAllNonEmpty = this.allIsNotEmpty();
    return (
      <div>
        <label>Title:</label>
        <input name="title"onChange={this.handleChange}></input>
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