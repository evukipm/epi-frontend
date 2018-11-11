import React, { Component } from 'react';
import { withAuth } from '../lib/authContext'
import post from '../lib/post-service';
import Container from '../components/Container';

class SearchPage extends Component {
  state = { 
    data: [],
    searchValue: '',
    isLoading: true,
  }

  handleChange = (e) => {
    const searchValue = e.target.value
    post.getSearch(searchValue)
    .then(result => {
      this.setState({
        data: result,
      })
    })
    .catch((error) =>{
      console.log(error)
    })
  }

  render() {
    const {data} = this.state;
    return ( 
      <div>
          <label>Search:</label>
          <input name="search" onChange={this.handleChange} />
        {data ? data.map( (post, index) => {
          return <Container 
            data = {post}
            key = {index}
            index = {index}
          />
        }) : null}
      </div>
    );
  }
}

export default withAuth(SearchPage);