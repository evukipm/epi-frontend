import React, { Component } from 'react';
import { withAuth } from '../../lib/authContext'
import ResultUser from './ResultUser'
import ResultPost from './ResultPost'
import search from '../../lib/search-service'
import '../../stylesheets/search.css'

class SearchPage extends Component {
  
  state = {
    searchValue: '',
    selectedOption: 'user',
    searchResult: [],
  }

  // Selecciona qué tipo con los radio button y lo guarda en el estado
  handleOptionChange = (e) => {
    const selectedOption = e.target.value
    this.setState({
      selectedOption,
      searchResult: []
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
    }else if (selectedOption === 'title' || selectedOption === 'text'){
      return <ResultPost 
      data={searchResult}
    />
    }else{
      return <div></div>
    }
  }

  render() {
    const { searchValue, selectedOption } = this.state
    return ( 
      <div className='search-page'>
        <form onSubmit={this.handleSubmit}>
          <h3 className="text">Searching for {searchValue}</h3>
          <div className='search-option-container'>
            <div className="radiobutton-container">
              <label className='search-radio-buttons text'>
                <input className="input-for-create-post" type="radio" value="user" checked={selectedOption === 'user'} onChange={this.handleOptionChange} />
                Users
              </label>
            </div>
            <div className="radiobutton-container">
              <label className='search-radio-buttons text'>
                <input className="input-for-create-post" type="radio" value="title" checked={selectedOption === 'title'} onChange={this.handleOptionChange} />
                Posts title
              </label>
            </div>
            <div className="radiobutton-container">
              <label className='search-radio-buttons text'>
                <input className="input-for-create-post" type="radio" value="text" checked={selectedOption === 'text'} onChange={this.handleOptionChange} />
                Post content
              </label>
            </div> 
          </div>
          <input className="input-for-create-post" type="text" onChange={this.handleInput} required/>
          <input className="button create-post-button" type="submit" value="search" />
        </form>
        {this.setType()}
      </div>
    )
  }
}

export default withAuth(SearchPage);