import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <ul className="nav navbar-nav">
                <li className="nav-item">
                  <NavLink 
                    activeClassName="selected"
                    className="nav-link" exact to="/" 
                  >Trang chủ <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    activeClassName="selected"
                    className="nav-link" to="/about"
                  >Giới thiệu</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    activeClassName="selected"
                    className="nav-link" to="/contact"
                  >Liên hệ</NavLink>
                </li>
            </ul>
        </nav>
        <Switch>
          <Route exact path="/about" component={About}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
