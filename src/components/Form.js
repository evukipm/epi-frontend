import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import '../stylesheets/form-component.css'

class Form extends Component {

  state = {
    value: '',
    isNotemptyValue: false,
  }

  handleChangeInput = (event) => {
    this.setState({
      value: event.target.value,
      isNotemptyValue: true,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = this.state;
    this.props.onSubmit(value)
    this.setState({
      value: '',    
      isNotemptyValue: false,
    }) 
  }

  render() {
    const { value, isNotemptyValue } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="input-for-create-post" type="text" value={value} onChange={this.handleChangeInput} required/>
        {isNotemptyValue ? <input className="button create-post-button" type="submit" value="Add step"/> : null }
      </form>
    )
  }
}

export default withAuth(Form);