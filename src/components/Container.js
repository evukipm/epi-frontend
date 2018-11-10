import React, { Component } from 'react'

 class Container extends Component {
  render() {
    const { data } =this.props
    return (
      <div>
        <div>
          <h1>{data.title}</h1>
          <p>Author: {data.author.username}</p>
          <p>{data.text}</p>
          <ol>
          {data.steps.map(step => {
            return <li>
              <div>{step.votes.positive}</div>
              <div>{step.votes.negative}</div>
              <div>{step.step}</div>            
            </li>
          })}
          </ol>
        </div>
      </div>
    )
  }
}

export default Container