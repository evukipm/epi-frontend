import React, { Component } from 'react';
import { withAuth } from '../../lib/authContext'
import ResultUser from './ResultUser'
import search from '../../lib/search-service'

class SearchPage extends Component {
  
  state = {
    searchValue: '',
    data: '',
    selectedOption: 'user',
    searchResult: [],
  }

  handleOptionChange = (e) => {
    const selectedOption = e.target.value
    this.setState({
      selectedOption,
    });
  }

  handleInput = (e) => {
    const searchValue = e.target.value
    this.setState({
      searchValue,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { searchValue, selectedOption } = this.state

    if(selectedOption === 'user'){
      search.searchUser(selectedOption, searchValue)
      .then(searchResult => {
        this.setState({
          searchResult,
        })
      })
      .catch(error => console.log(error))
    }else if(selectedOption === 'title'){
      console.log('title')
    }else if(selectedOption === 'text'){
      console.log('text')
    }
  }

  setType = () => {
    const {selectedOption, searchResult} = this.state
    if(selectedOption === 'user'){
      return <ResultUser 
      data={searchResult}
      type={selectedOption}
    />
    }else{
      return 'NANAI'
    }
  }

  render() {
    const { data, searchResult, selectedOption } = this.state
    return ( 
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Searching for {data}</label>
          <label>
            <input type="radio" value="user" checked={selectedOption === 'user'} onChange={this.handleOptionChange} />
            Users
          </label>
          <label>
            <input type="radio" value="title" checked={selectedOption === 'title'} onChange={this.handleOptionChange} />
            Posts title
          </label>
          <label>
            <input type="radio" value="text" checked={selectedOption === 'text'} onChange={this.handleOptionChange} />
            Post content
          </label>
          <input type="text" onChange={this.handleInput} />
        </form>
        {this.setType()}
      </div>
    )
  }
}

export default withAuth(SearchPage);