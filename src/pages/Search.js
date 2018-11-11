import React, { Component } from 'react';
import { withAuth } from '../lib/authContext'
import post from '../lib/post-service';
import Container from '../components/Container';

class SearchPage extends Component {
  

  render() {
    return ( 
      <div>Soy una búsqueda</div>
    )
  }
}

export default withAuth(SearchPage);