import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <ul className="nav navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Trang chủ <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">Liên hệ</Link>
                </li>
            </ul>
        </nav>
        <Switch>
          <Route exact path="/about" component={About}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
