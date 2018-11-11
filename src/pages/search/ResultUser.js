import React, { Component } from 'react';

class ResultUser extends Component {

  render() { 
    const {data, type} = this.props
    return ( 
      <div>
      {data.length < 1 ? <p>Any results</p> : data.map((item, index) => {
        return <li key={index}>{item.username}</li>
      })}
      </div>
    );
  }
}

export default ResultUser;