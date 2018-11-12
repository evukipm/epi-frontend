import React, { Component } from 'react';

class ResultPost extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.length < 1 ? <p>No results</p> : data.map((item, index) => (
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ResultPost;
