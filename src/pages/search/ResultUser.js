import React, { Component } from 'react';

class ResultUser extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.length < 1 ? <p>Any results</p> : data.map((item, index) => <li key={index}>{item.username}</li>)}
      </div>
    );
  }
}

export default ResultUser;
