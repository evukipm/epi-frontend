import React, { Component } from 'react';
import { withAuth } from '../lib/authContext'

class SearchPage extends Component {
  state = {  }
  render() { 
    return ( 
      <div>I'm the search page</div>
    );
  }
}

export default withAuth(SearchPage);