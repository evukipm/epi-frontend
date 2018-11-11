import React, { Component } from 'react'
import vote from '../lib/votes-service';
import { Link } from 'react-router-dom'
import '../stylesheets/container-component.css'

class Container extends Component {
  
  increaseVote = (step_id, data) => {
    console.log(data);
    vote.createVote( step_id, data._id)
    .then( (step) => {
    })
    .catch( error => {console.log(error) })
  }

  decreaseVote = () => {
    console.log('-1');
  }

  render() {
    const { data } =this.props
    return (
      <div>
        <div>
          <h1>{data.title}</h1>
          <p><Link to={`/profile/${data.author._id}`}>{data.author.username}</Link></p>
          <p>{data.text}</p>
          <ol>
          {data.steps.map((step, key) => {

            return <li key={key}>
              <div>
                <div>{step.votes.positive}</div>
                <img src={`${process.env.PUBLIC_URL}/img/arrow_up.png`} alt="arrow-img" width="40px" onClick={() => this.increaseVote(step._id, data)} ></img>
              </div>
              <div>
                <div>{step.votes.negative}</div>
                <img src={`${process.env.PUBLIC_URL}/img/arrow_down.png`} alt="arrow-img" width="40px" onClick={this.decreaseVote}></img>
              </div>
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