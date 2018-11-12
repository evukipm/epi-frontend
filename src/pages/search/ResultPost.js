import React, { Component } from 'react';

class ResultPost extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.length < 1 ? <p>Any results</p> : data.map((item, index) => <li key={index}>{item.title}</li>)}
      </div>
    );
  }
}

export default ResultPost;
