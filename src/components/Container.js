import React, { Component } from 'react'
import vote from '../lib/votes-service';
import { Link } from 'react-router-dom'
import '../stylesheets/container-component.css'
import moment from 'moment'

class Container extends Component {

  state = {
    data: this.props.data,
    viewSteps: false,
    classOpen: '',
  }
  
  //INCREASE THE POSITIVE VOTES
  handleIncreaseVote = (index) => () => {
    const data = {...this.state.data}
    data.steps[index].positiveVotes++;
    
    this.setState({
      data: data,
      classOpen: ''
    })
    
    //CALLING POSITIVE VOTES SERVICE
    vote.createPositiveVote( data._id, data.steps[index]._id )
    .then(() => {})
    .catch( error => {console.log(error) })
  }

  //INCREASE THE NEGATIVE VOTES
  handleDecreaseVote = (index) => () => {
    const data = {...this.state.data}
    data.steps[index].negativeVotes++;
    
    this.setState({
      data: data
    })
    
    //CALLING NEGATIVE VOTES SERVICE
    vote.createNegativeVote( data._id, data.steps[index]._id )
    .then(() => {
    })
    .catch( error => {console.log(error) })
  }

  toggleStep = () => {
    const { viewSteps, classOpen } = this.state
    if(classOpen === 'steps-open'){
      this.setState({
        viewSteps: false,
        classOpen: ''
      })
    }else if(classOpen === ''){
      this.setState({
        viewSteps: true,
        classOpen: 'steps-open'
      })
    }
    
  }

  render() {
    const { data, viewSteps, classOpen } = this.state;
    const positive = data.steps.reduce((acum, item) => {
      return acum + item.positiveVotes
    }, 0)
    const negative = data.steps.reduce((acum, item) => {
      return acum + item.negativeVotes
    }, 0)
    const total = positive + negative;
    const rate = ((positive/total)*100).toFixed(0);

    return (
        <div className="container-post-post">
        <h1>{data.title}</h1>
          <div className="container-author">
            <img src={data.author.avatar} alt={data.author.username} />
            <Link to={`/profile/${data.author._id}`}>{data.author.username}</Link>
          </div>
          <div className="container-post-description">
              <p>{data.text}</p>
              {data.steps.length > 0 ? 
              <p className="steps-button" onClick={this.toggleStep}>{viewSteps ? 'Close steps' : 'View steps'}</p> : null}
              <ol className={`container-post-list ${classOpen}`}>
          {viewSteps ? data.steps.map((step, key) => {
            return <li key={key}>
              <div className="container-post-votes">
                <p>{step.positiveVotes}</p>
                <img src={`${process.env.PUBLIC_URL}/img/arrow_up.png`} alt="arrow-img" width="40px" onClick={this.handleIncreaseVote(key)}></img>
                <p>{step.negativeVotes}</p>
                <img src={`${process.env.PUBLIC_URL}/img/arrow_down.png`} alt="arrow-img" width="40px" onClick={this.handleDecreaseVote(key)}></img>
              </div>
              <div className="container-post-step">{step.step}</div>         
            </li>
          }) : null}
          </ol>
          </div>
          <div className="container-footer">
            {rate ? <p>Positive votes: { !(rate) ? 0: rate } %</p> : null}
            <p>{moment(data.date).fromNow()}</p>
          </div>
        </div>
    )
  }
}

export default Container