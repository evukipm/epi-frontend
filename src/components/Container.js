import React, { Component } from 'react'
import vote from '../lib/votes-service';
import { Link } from 'react-router-dom'
import '../stylesheets/container-component.css'
import moment from 'moment'

class Container extends Component {

  state = {
    data: this.props.data,
    viewSteps: false,
  }
  
  handleIncreaseVote = (index) => () => {
    // Esto crea una shalow copy
    const data = {...this.state.data}
    data.steps[index].votes.positive++;
    console.log(data)
    
    this.setState({
      data: data
    })
    debugger
    vote.createVote( data._id, data.steps[index]._id, index )
    .then(() => {
      console.log(data)
    })
    .catch( error => {console.log(error) })
  }

  handleDecreaseVote = (index) => () => {
    const data = {...this.state.data}
    data.steps[index].votes.negative++;
    
    this.setState({
      data: data
    })
  }

  toggleStep = () => {
    const { viewSteps } = this.state
    this.setState({
      viewSteps: !viewSteps
    })
  }

  render() {
    const { data, viewSteps } = this.state

    return (
      <div>
        <div className="container-post-post">
          <h1>{data.title}</h1>
          <div className="container-post-author">
          <p><Link to={`/profile/${data.author._id}`}>{data.author.username}</Link></p>
          <p>{moment(data.date).fromNow()}</p>
          </div>
          <p className="container-post-description">{data.text}</p>
          {data.steps.length > 1 ? <button onClick={this.toggleStep}>{viewSteps ? 'Close steps' : 'View steps'}</button> : null}
          <ol className="container-post-list">
          {viewSteps ? data.steps.map((step, key) => {
            return <li key={key}>
              <div className="container-post-votes">
                <p>{step.votes.positive}</p>
                <img src={`${process.env.PUBLIC_URL}/img/arrow_up.png`} alt="arrow-img" width="40px" onClick={this.handleIncreaseVote(key)}></img>
                <p>{step.votes.negative}</p>
                <img src={`${process.env.PUBLIC_URL}/img/arrow_down.png`} alt="arrow-img" width="40px" onClick={this.handleDecreaseVote(key)}></img>
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