import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//  Routes
import AuthenticationPage from './Pages/AuthenticationPage/AuthenticationPage'
import AuthUber from './Pages/AuthUber/AuthUber'
import Home from './Pages/Home/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/authentication' exact component={AuthenticationPage} />
          <Route path='/auth-uber' exact component={AuthUber} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
