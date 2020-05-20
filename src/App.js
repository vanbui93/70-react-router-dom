import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        {/* Switch => sử dụng giống Switch case*/}
        <Switch>
          <Route exact path="/about" component={About}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={Contact}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
