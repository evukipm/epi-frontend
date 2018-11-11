import React, { Component } from 'react'
import vote from '../lib/votes-service';
import { Link } from 'react-router-dom'
import '../stylesheets/container-component.css'
import moment from 'moment'

class Container extends Component {

  state = {
    viewSteps: false,
  }
  
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

  toggleStep = () => {
    const { viewSteps } = this.state
    this.setState({
      viewSteps: !viewSteps
    })
  }

  render() {
    const { data } = this.props
    const { viewSteps } = this.state
    return (
      <div>
        <div className="container-post-post">
          <h1>{data.title}</h1>
          <div className="container-post-author">
          <p><Link to={`/profile/${data.author._id}`}>{data.author.username}</Link></p>
          <p>{moment(data.date).fromNow()}</p>
          </div>
          <p className="container-post-description">{data.text}</p>
          {data.steps.length > 1 ? <button onClick={this.toggleStep}>view steps</button> : null}
          <ol className="container-post-list">
          {viewSteps ? data.steps.map((step, key) => {
            return <li key={key}>
              <div className="container-post-votes">
                <p>{step.votes.positive}</p>
                <img src={`${process.env.PUBLIC_URL}/img/arrow_up.png`} alt="arrow-img" width="40px" onClick={() => this.increaseVote(step._id, data)} ></img>
                <p>{step.votes.negative}</p>
                <img src={`${process.env.PUBLIC_URL}/img/arrow_down.png`} alt="arrow-img" width="40px" onClick={this.decreaseVote}></img>
              </div>
              <div className="container-post-step">{step.step}</div>            
            </li>
          }) : null}
          </ol>
        </div>
      </div>
    )
  }
}

export default Container