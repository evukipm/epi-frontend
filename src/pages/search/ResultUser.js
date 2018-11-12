import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResultUser extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.length < 1 ? <p>No results</p> : data.map((item, index) => (
          <div className="search-user-box">
            <img src={item.avatar} alt="user avatar" />
            <p>
              <Link to={`/profile/${item._id}`}>{item.username}</Link>
              {item.description}
            </p>
            <button onClick={this.followUser}>Follow</button>
          </div>
        ))}
      </div>
    );
  }
}

export default ResultUser;
