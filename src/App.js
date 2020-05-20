import React, { Component } from 'react';
import './App.css';

import routes from './components/Routes';
import Nav from './components/Nav';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  showRoute = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.main}
          />
        );
      })
    }
    return result;
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          {/* Switch => sử dụng giống Switch case*/}
          <Switch>
            {this.showRoute(routes)}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
