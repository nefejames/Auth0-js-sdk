import React from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Profile from './Profile';
import Callback from './Callback';
import Auth from './Auth/Auth';

function App({history}) {
  const auth = new Auth(history) 

  return (
    <div className="App">
      <Nav auth={auth}/>
      <Switch>
        <div className="body">
          <Route exact path="/" render={props => <Home auth={auth} {...props} />} />
          <Route exact path="/callback" render={props => <Callback auth={auth} {...props} />} />
          <Route exact path="/profile" render={props => <Profile auth={auth} {...props} />} /> 
        </div>
      </Switch>
    </div>
  );
}

export default withRouter(App);
