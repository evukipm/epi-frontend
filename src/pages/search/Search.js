import React, { Component } from 'react';
import { withAuth } from '../../lib/authContext'
import ResultUser from './ResultUser'
import ResultPost from './ResultPost'
import search from '../../lib/search-service'

class SearchPage extends Component {
  
  state = {
    searchValue: '',
    data: '',
    selectedOption: 'user',
    searchResult: [],
  }

  // Selecciona qué tipo con los radio button y lo guarda en el estado
  handleOptionChange = (e) => {
    const selectedOption = e.target.value
    this.setState({
      selectedOption,
    });
  }

  // Toma el texto de la búsqueda y lo guarda en el estado
  handleInput = (e) => {
    const searchValue = e.target.value
    this.setState({
      searchValue,
    })
  }

  // Coge el tipo de los radios y la búsqueda y hace una llamada axios
  handleSubmit = (e) => {
    e.preventDefault()

    const { searchValue, selectedOption } = this.state
      search.searchUser(selectedOption, searchValue)
      .then(searchResult => {
        this.setState({
          searchResult,
        })
      })
      .catch(error => console.log(error))
  }

  // Muestra un componente u otro según el tipo marcado en los radios
  setType = () => {
    const {searchResult, selectedOption} = this.state
    if(selectedOption === 'user'){
      return <ResultUser 
      data={searchResult}
    />
    }else{
      return <ResultPost 
      data={searchResult}
    />
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