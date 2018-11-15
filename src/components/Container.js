import React, { Component } from 'react'
import vote from '../lib/votes-service';
import { Link } from 'react-router-dom'
import '../stylesheets/container-component.css'
import moment from 'moment'

class Container extends Component {

  state = {
    data: this.props.data,
  }
  
  //INCREASE THE POSITIVE VOTES
  handleIncreaseVote = (index) => () => {
    const data = {...this.state.data}
    data.steps[index].positiveVotes++;
    
    this.setState({
      data: data,
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

  render() {
    const { data } = this.state;
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
          <details>
            <summary>{data.text}</summary>
            <p>
                {data.steps.map((step, key) => {
                return <div key={key} className="container-post-votes">
                    <div className="container-votes">
                      <div>
                        <p>{step.positiveVotes}</p>
                        <i className="fas fa-angle-double-up" onClick={this.handleIncreaseVote(key)}></i>
                      </div>
                      <div>
                        <p>{step.negativeVotes}</p>
                        <i className="fas fa-angle-double-down" onClick={this.handleDecreaseVote(key)}></i>
                      </div>
                    </div>
                    <div className="container-post-step">{step.step}</div>
                  </div>
              })}
          </p>
          </details>
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