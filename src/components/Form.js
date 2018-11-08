import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';

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
        <input type="text" value={value} onChange={this.handleChangeInput}/>
        {isNotemptyValue ? <input type="submit" value="Add step"/> : null }
      </form>
    )
  }
}

export default withAuth(Form);