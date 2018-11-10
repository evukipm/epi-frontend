import React, { Component } from 'react'

 class Container extends Component {
  

  increaseVote = (id) => {
    console.log(id);
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
          <p>Author: {data.author.username}</p>
          <p>{data.text}</p>
          <ol>
          {data.steps.map((step, key) => {

            return <li key={key}>
              <div>
                <div>{step.votes.positive}</div>
                <img src={`${process.env.PUBLIC_URL}/img/arrow_up.png`} alt="arrow-img" width="40px" onClick={() => this.increaseVote(step._id)} ></img>
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