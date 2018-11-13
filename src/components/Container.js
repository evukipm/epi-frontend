import React, { Component } from 'react'
import vote from '../lib/votes-service';
import { Link } from 'react-router-dom'
import '../stylesheets/container-component.css'
import moment from 'moment'

class Container extends Component {

  state = {
    data: this.props.data,
    viewSteps: false,
    postives: [],
  }
  
  //INCREASE THE POSITIVE VOTES
  handleIncreaseVote = (index) => () => {
    const data = {...this.state.data}
    data.steps[index].positiveVotes++;
    // console.log(data)
    
    this.setState({
      data: data
    })
    
    //CALLING POSITIVE VOTES SERVICE
    vote.createPositiveVote( data._id, data.steps[index]._id )
    .then(() => {
      // console.log(data)
    })
    .catch( error => {console.log(error) })
  }

  //INCREASE THE NEGATIVE VOTES
  handleDecreaseVote = (index) => () => {
    // Esto crea una shalow copy
    const data = {...this.state.data}
    data.steps[index].negativeVotes++;
    // console.log(data)
    
    this.setState({
      data: data
    })
    
    //CALLING NEGATIVE VOTES SERVICE
    vote.createNegativeVote( data._id, data.steps[index]._id )
    .then(() => {
      // console.log(data)
    })
    .catch( error => {console.log(error) })
  }

  toggleStep = () => {
    const { viewSteps } = this.state
    this.setState({
      viewSteps: !viewSteps
    })
  }

  handleRatioOfPositiveVotes(key){
    const {data, postives} = this.state;
    return data.steps[key].positiveVotes;
  }

  sumAllNumbers(arrayOfNums){
    arrayOfNums.reduce(function(previusValue, curentVlue){
      // console.log(previusValue, curentVlue)
      return previusValue + curentVlue;
    }, 0);

  }


  //
  /*{data.steps.map( (step, key) =>{
    numberOfVotes.push(this.handleRatioOfPositiveVotes(key))
    return numberOfVotes.reduce(function(previusValue, curentVlue){
      console.log(previusValue, curentVlue)
      return previusValue + curentVlue;
    }, 0);
  })}
  */

  /*
  (numerosPositivos / (numerosPositivos + numerosNegativos) * 100
  */

  render() {
    const { data, viewSteps } = this.state
    const numberOfVotes = [];
    const positive = data.steps.reduce((acum, item) => {
      console.log('E', item.positiveVotes)
      return acum + item.positiveVotes
    }, 0)
    const negative = data.steps.reduce((acum, item) => {
      return acum + item.negativeVotes
    }, 0)
    console.log((positive / (positive + negative)) * 100);
    return (
      <div>
        <div className="container-post-post">
          <h1>{data.title}</h1>
          <div className="container-post-author">
          <p><Link to={`/profile/${data.author._id}`}>{data.author.username}</Link></p>
          <p>{moment(data.date).fromNow()}</p>
          </div>
          <p className="container-post-description">{data.text}</p>
          <div>
            <div>
              <p>Positive votes: 
              {data.steps.map( (step, key) =>{
                numberOfVotes.push(this.handleRatioOfPositiveVotes(key))
                return numberOfVotes
              })}
              {this.sumAllNumbers(numberOfVotes)}


              </p> 
            </div>
            <div>
              {data.steps.length > 1 ? 
              <button onClick={this.toggleStep}>{viewSteps ? 'Close steps' : 'View steps'}</button> : null}
            </div>
          </div>
          <ol className="container-post-list">
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
      </div>
    )
  }
}

export default Container