import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/hoc/PrivateRoute';
import Navbar from './components/Navbar';
import Signup from './pages/authentication/Signup';
import Login from './pages/authentication/Login';
import AuthContext from './lib/authContext';
import Createpost from './pages/Createpost';
import Profile from './pages/profile/Profile';
import Homepage from './pages/Homepage';

class App extends Component {
  render() {
    return (
      <AuthContext>
        <div className="container">
            <Navbar />
            <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/newpost" component={Createpost} />
              <PrivateRoute path="/profile/:id" component={Profile} />
              <PrivateRoute path="/" component={Homepage} />
            </Switch>
        </div>
      </AuthContext>
    );
  }
}

export default App;
