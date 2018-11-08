import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar';
//import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';

import AuthContext from './lib/authContext';
import Createpost from './pages/Createpost';
class App extends Component {
  render() {
    return (
      <AuthContext>
        <div className="container">
          <div>
            <h1>Basic React Authentication</h1>
            <Navbar />
            <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />              
              <PrivateRoute path="/newpost" component={Createpost} />
            </Switch>
          </div>
        </div>
      </AuthContext>
    )
  }
}

export default App;
