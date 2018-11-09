import React, { Component } from 'react'

 class Container extends Component {
  render() {
    const { data } =this.props
    return (
      <div>
        <div>
          <h1>{data.title}</h1>
          <p>Author: {data.author}</p>
          <p>{data.text}</p>
        </div>
      </div>
    )
  }
}

export default Container